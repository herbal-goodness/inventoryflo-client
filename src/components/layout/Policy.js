import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../layout/Menu";

const Policy = () => {
	const [newComponent, setComp] = useState({ visible: true });
	const { visible } = newComponent;
	return (
		<div className="data-policy">
			{visible ? <Menu /> : null}
			<main className="wrapper container-fluid mx-auto px-5 py-3">
				<header className="policy-header">
					<h1>Terms of Service</h1>
				</header>
				<article className="policy-article">
					<p className="art-content">
						Inventoryflo, cares about your privacy. For this reason, we collect
						and use personal information only as needed to deliver our products,
						services, websites and mobile applications, and to communicate with
						you about the same, or as you have requested (collectively, our
						“Services”). Your personal information includes information such as:
					</p>
					<p className="art-content">
						Name, Address, Telephone number, Email address. Company name,
						Billing and payment information,Candidate information (for job
						applicants), Other data collected that could directly or indirectly
						identify you.
					</p>

					<p className="art-content">
						Our Privacy Policy not only explains how and why we use your
						personal information that we collect, but also how you can access,
						update or otherwise take control of your personal information. If at
						any time you have questions about our practices or any of your
						rights described below, you may reach our Data Protection Officer
						(“DPO”) and our dedicated team that supports this office by
						contacting us at abc@inventoryflo.com. This inbox is actively
						monitored and managed so that we can deliver an experience that you
						can confidently trust.
					</p>
				</article>
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">
						What information we collect, how we collect it, and why
					</h3>
					<p>
						Much of what you likely consider personal information is collected
						directly from you when you:
					</p>
					<ol id="policy-requirement-list">
						<li>
							Create an account or purchase any of our Services (ex: billing
							information, including name, address, credit card number,
							government identification);
						</li>
						<li>
							Connect our Services to your marketplace accounts on third-party
							websites (ex: login and authentication information necessary to
							maintain connection; order and inventory information downloaded
							from these third-party websites);
						</li>
						<li>
							Request assistance from our customer support team (ex: phone
							number);
						</li>
						<li>
							Complete contact forms or request newsletters or other information
							from us (ex: email); or
						</li>
						<li>
							Participate in contests and surveys, apply for a job, or otherwise
							participate in activities we promote that might require
							information about you.
						</li>
					</ol>
					<p>
						However, we also collect additional information when delivering our
						Services to you to ensure necessary and optimal performance. These
						methods of collection may not be as obvious to you, so we thought
						we’d highlight and explain a bit more about what these might be (as
						they vary from time to time):
					</p>
					<p>
						Supplemented Data may be received about you from other sources,
						including publicly available databases or third parties from whom we
						have purchased data, in which case we may combine this data with
						information we already have about you so that we can update, expand
						and analyze the accuracy of our records, identify new customers, and
						provide products and services that may be of interest to you. If you
						provide us personal information about others, or if others give us
						your information, we will only use that information for the specific
						reason for which it was provided to us.
					</p>
				</article>
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">How we utilize information</h3>
					<p>
						We strongly believe in both minimizing the data we collect and
						limiting its use and purpose to only that <strong>(1)</strong> for
						which we have been given permission, <strong>(2)</strong> as
						necessary to deliver the Services you purchase or interact with, or{" "}
						<strong>(3)</strong> as we might be required or permitted for legal
						compliance or other lawful purposes:
					</p>
					<p>
						Delivering, improving, updating and enhancing our Services. We
						collect various information relating to your purchase, use and/or
						interactions with our Services. We utilize this information to:
					</p>
					<ul className="policy-info-utilization">
						<li>
							Improve and optimize the operation and performance of our Services
							(again, including our websites and mobile applications)
						</li>
						<li>
							Diagnose problems with and identify any security risks, errors, or
							needed enhancements to the Services
						</li>
						<li>
							Detect and prevent fraud and abuse of our Services and systems
						</li>
						<li>Collecting aggregate statistics about use of the Services</li>
						<li>
							Understand and analyze how you use our Services and what products
							and services are most relevant to you.
						</li>
					</ul>
					<p>
						Much of the data collected is aggregated or statistical data about
						how individuals use our Services, and is not linked to any personal
						information.
					</p>
					<p>
						Sharing with trusted third parties. We may share your personal
						information with affiliated companies within our corporate family,
						with third parties with which we have partnered to allow you to
						integrate their services into our own Services, and with trusted
						third party service providers as necessary for them to perform
						services on our behalf, such as:
					</p>
					<ul className="policy-info-utilization">
						<li>Processing credit card payments</li>
						<li>
							Performing analysis of our Services and customers demographics
						</li>
						<li>
							Communicating with you, such as by way email or survey delivery
						</li>
						<li>Customer relationship management</li>
					</ul>
					<p>
						We only share your personal information as necessary for any third
						party to provide the services as requested or as needed on our
						behalf. These third parties (and any subcontractors they may be
						permitted to use) are subject to strict data processing terms and
						conditions and are prohibited from utilizing, sharing or retaining
						your personal information for any purpose other than as they have
						been specifically contracted for (or without your consent).
					</p>
					<p>
						Communicating with you. We may contact you directly or through a
						third party service provider regarding products or services you have
						signed up or purchased from us, such as necessary to deliver
						transactional or service related communications. We may also contact
						you with offers for additional services we think you’ll find
						valuable if you give us consent, or where allowed based upon
						legitimate interests. You don’t need to provide consent as a
						condition to purchase our goods or services. These contacts may
						include:
					</p>
					<ul>
						<li>Email - Text (SMS) messages</li>
						<li>Telephone calls</li>
						<li>Messenger applications (e.g. WhatsApp, etc.)</li>
						<li>Automated phone calls or text messages.</li>
					</ul>
					<p>
						You may opt-out of receiving promotional emails from Inventoryflo by
						following the opt-out instructions provided in those emails or by
						contacting abc@inventoryflo.com.
					</p>
					<p>
						If we collect information from you in connection with a co-branded
						offer, it will be clear at the point of collection who is collecting
						the information and whose privacy policy applies. In addition, it
						will describe any choice options you have in regards to the use
						and/or sharing of your personal information with a co-branded
						partner, as well as how to exercise those options. We are not
						responsible for the privacy practices or the content of third-party
						sites. Please read the privacy policy of any website you visit.
					</p>
					<p>
						If you make use of a service that allows you to import marketplace
						orders, we will only use the contacts and any other personal
						information for the requested service. If you believe that anyone
						has provided us with your personal information and you would like to
						request that it be removed from our database, please contact us at
						abc@inventoryflo.com.
					</p>
					<p>
						Compliance with legal, regulatory and law enforcement requests. We
						cooperate with government and law enforcement officials and private
						parties to enforce and comply with the law. We will disclose any
						information about you to government or law enforcement officials or
						private parties as we, in our sole discretion, believe necessary or
						appropriate to respond to claims and legal process (such as subpoena
						requests), to protect our property and rights or the property and
						rights of a third party, to protect the safety of the public or any
						person, or to prevent or stop activity we consider to be illegal or
						unethical.
					</p>
					To the extent we are legally permitted to do so, we will take
					reasonable steps to notify you in the event that we are required to
					provide your personal information to third parties as part of legal
					process.
				</article>

				{/* How we secure data */}
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">
						How we secure, store and retain your data
					</h3>
					<p>
						We follow generally accepted standards to store and protect the
						personal information we collect, both during transmission and once
						received and stored, including utilization of encryption where
						appropriate.
					</p>
					<p>
						We retain personal information only for as long as necessary to
						provide the Services you have requested and thereafter for a variety
						of legitimate legal or business purposes. These might include
						retention periods:
					</p>

					<ul id="policy-requirement-list">
						<li>
							Mandated by law, contract or similar obligations applicable to our
							business operations;
						</li>
						<li>
							For preserving, resolving, defending or enforcing our
							legal/contractual rights; or
						</li>
						<li>
							Needed to maintain adequate and accurate business and financial
							records.
						</li>
					</ul>
					<p>
						If you have any questions about the security or retention of your
						personal information, you can contact us at abc@inventoryflo.com.
					</p>
				</article>
				{/* How to access/update data */}
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">
						How you can access, update or delete your data
					</h3>
					<p>
						To easily access, view, or update your personal information, or to
						update your subscription preferences, please sign into your Account
						and visit “Account Settings.
					</p>
					<p>
						If you wish to delete or port your personal information, you may
						submit your request to abc@inventoryflo.com. If you make a request
						to delete your personal information and that data is necessary for
						the products or services you have purchased, the request will be
						honored only to the extent it is no longer necessary for any
						Services purchased or required for our legitimate business purposes
						or legal or contractual record keeping requirements.
					</p>
					<p>
						If you are unable for any reason to access your Account Settings,
						you may also contact us by one of the methods described in the{" "}
						<Link to="">“Contact Us”</Link> section below.
					</p>
					<p>
						If you have an unresolved privacy or data use concern that we have
						not addressed satisfactorily, please contact our U.S.-based third
						party dispute resolution provider (free of charge) at
						<Link to="https://feedback-form.truste.com/watchdog/request">
							https://feedback-form.truste.com/watchdog/request
						</Link>
						. Under certain conditions, more fully described on the Privacy
						Shield website, you may invoke binding arbitration when other
						dispute resolution procedures have been exhausted.
					</p>
					<p>
						In compliance with the Privacy Shield Principles, Inventoryflo Inc.
						commits to resolve complaints about our collection or use of your
						personal information. EU and Swiss individuals with inquiries or
						complaints regarding our Privacy Shield policy should first contact
						us in any manner provided in the “CONTACT US” section below in this
						Privacy Policy.
					</p>
				</article>

				{/* Do not track notifications */}
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">‘Do Not Track’ notifications.</h3>
					<p>
						Some browsers allow you to automatically notify websites you visit
						not to track you using a “Do Not Track” signal. There is no
						consensus among industry participants as to what “Do Not Track”
						means in this context. Like many websites and online services, we
						currently do not alter our practices when we receive a “Do Not
						Track” signal from a visitor’s browser. To find out more about “Do
						Not Track,” you may wish to visit{" "}
						<Link to="www.allaboutdnt.com">www.allaboutdnt.com</Link>.
					</p>
				</article>
				{/* Age Restrictions */}
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">Age Restrictions</h3>
					<p>
						Our Services are available for purchase only for those over the age
						of 18. Our Services are not targeted to, intended to be consumed by
						or designed to entice individuals under the age of 18. If you know
						of or have reason to believe anyone under the age of 18 has provided
						us with any personal information, please{" "}
						<Link to="">contact us</Link>.
					</p>
				</article>
				{/* Non-Discrimination */}
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">Non-Discrimination</h3>
					<p>
						We will not discriminate against you for exercising any of your
						privacy rights. Unless permitted under applicable laws, we will not:
					</p>
					<ul id="policy-requirement-list">
						<li>Deny you goods or services.</li>
						<li>
							Charge you different prices or rates for goods or services,
							including through granting discounts or other benefits, or
							imposing penalties.
						</li>
						<li>
							Provide you a different level or quality of goods or services
						</li>
						<li>
							Suggest that you may receive a different price or rate for goods
							or services or a different level or quality of goods or services
						</li>
					</ul>
				</article>
				{/* Changes to this policy */}
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header">Changes to this policy</h3>
					<p>
						We reserve the right to modify this Privacy Policy at any time. If
						we decide to change our Privacy Policy, we will post those changes
						to this Privacy Policy and any other places we deem appropriate, so
						that you are aware of what information we collect, how we use it,
						and under what circumstances, if any, we disclose it. If we make
						material changes to this Privacy Policy, we will notify you here, by
						email, or by means of a notice on our home page, at least thirty
						(30) days prior to the implementation of the changes.
					</p>
				</article>
				{/*  Contact us */}
				<article className="policy-article policy-info">
					<h3 className="policy-sub-header"> Contact us</h3>
					<p>
						If you have any privacy-related questions, concerns or complaints
						about our Privacy Policy, our practices or our Services, you may
						contact us by email at{" "}
						<Link to="abc@inventoryflo.com">abc@inventoryflo.com</Link>. In the
						alternative, you may contact us by either of the following means:
					</p>
					<ul id="policy-requirement-list">
						<li>By Mail:</li>
						<li>By Phone:</li>
					</ul>
					<p>
						We will respond to all requests, inquiries or concerns within thirty
						(30) days.
					</p>
				</article>
			</main>
		</div>
	);
};

export default Policy;
