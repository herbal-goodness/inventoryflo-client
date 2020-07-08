import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../utils/components";
import {
  fuzzyTextFilterFn,
  DefaultColumnFilter,
  IndeterminateCheckbox,
} from "./functions";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  useRowSelect,
} from "react-table";

/**
 *
 * @param {} Table component
 */
function SalesTable({ data, columns }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    headers,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      sortBy,
      groupBy,
      expanded,
      filters,
      selectedRowIds,
    },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      disableMultiSort: true,
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    // Here we will use a plugin to add our selection column
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            // Make this column a groupByBoundary. This ensures that groupBy columns
            // are placed after it
            groupByBoundary: true,
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ];
      });
    }
  );

  // Render the UI for your table
  return (
    <>
      <div class="card">
        <div class="card-header">Sales Trend</div>
        <div class="card-body">
          <table className="table table-hover" {...getTableProps()}>
            <thead>
              {
                <tr>
                  {headers.map((column) => (
                    <th {...column.getHeaderProps()} scope="col">
                      <div>
                        <span {...column.getSortByToggleProps()}>
                          {column.render("Header")}
                          {/* Add a sort direction indicator */}
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </div>
                      {/* Render the columns filter UI */}
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              }
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>
                          {cell.isGrouped ? (
                            // If it's a grouped cell, add an expander and row count
                            <>
                              <span {...row.getToggleRowExpandedProps()}>
                                {row.isExpanded ? "👇" : "👉"}
                              </span>{" "}
                              {cell.render("Cell", { editable: false })} (
                              {row.subRows.length})
                            </>
                          ) : cell.isAggregated ? (
                            // If the cell is aggregated, use the Aggregated
                            // renderer for cell
                            cell.render("Aggregated")
                          ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                            // Otherwise, just render the regular cell
                            cell.render("Cell", { editable: true })
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/*
        Pagination can be built however you'd like.
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
              sortBy,
              groupBy,
              expanded: expanded,
              filters,
              selectedRowIds: selectedRowIds,
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );

  // const showProducts = () => {
  //   if (products) {
  //     return products.map(
  //       (
  //         { age, firstName, lastName, progress, status, subRows, visits },
  //         index
  //       ) => (
  //         <tr key={index}>
  //           <td>
  //             <input type="checkbox" class="form-check-input" />
  //           </td>
  //           <td className="truncate">{age}</td>
  //           <td>{firstName}</td>
  //           <td>{lastName}</td>
  //           <td>{progress}</td>
  //           <td>{status}</td>
  //           <td>{subRows}</td>
  //           <td>{visits}</td>
  //         </tr>
  //       )
  //     );
  //   } else {
  //     return <Spinner />;
  //   }
  // };
  // return (
  //   <>
  //     <div class="card">
  //       <div class="card-header">Sales Trend</div>
  //       <div class="card-body">
  //         <table className="table table-hover">
  //           <thead>
  //             <tr>
  //               <th scope="col">
  //                 <div className="checkbox">
  //                   <input type="checkbox" class="form-check-input" />
  //                   <label htmlFor="checkbox1"></label>
  //                 </div>
  //               </th>
  //               <th scope="col"></th>
  //               <th scope="col">Name</th>
  //               <th scope="col" className="sku">
  //                 SKU
  //               </th>
  //               <th scope="col">
  //                 <Link to="">category</Link>
  //               </th>
  //               <th scope="col">
  //                 <Link to="">quantity</Link>
  //               </th>
  //               <th scope="col">Price</th>
  //             </tr>
  //           </thead>
  //           <tbody>{showProducts()}</tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default SalesTable;
