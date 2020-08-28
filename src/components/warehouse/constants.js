const today = new Date();
const priorDate = new Date().setDate(today.getDate() - 30);
const otherPriorDate = new Date().setDate(today.getDate() - 60);
exports.last30Days = new Date(priorDate).toJSON();
exports.lastOther30Days = new Date(otherPriorDate).toJSON();
exports.last7Days = new Date(new Date().setDate(today.getDate() - 7)).toJSON();
exports.lastOther7Days = new Date(
  new Date().setDate(today.getDate() - 14)
).toJSON();
exports.yesterday = new Date(
  new Date().getTime() - 24 * 60 * 60 * 1000
).toJSON();
exports.dayB4yesterday = new Date(
  new Date().getTime() - 48 * 60 * 60 * 1000
).toJSON();
exports.currentDay = new Date(
  new Date().getTime() - new Date().getHours() * 60 * 60 * 1000
).toJSON();
exports.thisWeek = new Date(
  new Date() - new Date().getDay() * 24 * 60 * 60 * 1000
).toJSON();

const dateWithCurrentYearAndthisMonth = new Date(
  new Date("2019-01-01T00:00:00.000Z").setMonth(new Date().getMonth())
).setFullYear(new Date().getFullYear());
const dateWithCurrentYearAndLastMonth = new Date(
  new Date("2019-01-01T00:00:00.000Z").setMonth(new Date().getMonth() - 1)
).setFullYear(new Date().getFullYear());
exports.beginningOfmonth = new Date(dateWithCurrentYearAndthisMonth).toJSON();
exports.beginningOflastMonth = new Date(
  dateWithCurrentYearAndLastMonth
).toJSON();
