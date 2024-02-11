import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Terms = () => {
  return (
    <main className="bg-white">
      <Navbar className2="bg-black" />
      <div className="px-5 sm:px-[75px] sm:pt-40 pt-10">
        <h1 className="text-[46px] text-[#313542] font-bold sm:leading-[63px]">
          Terms of Service
        </h1>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 leading-5">
          Effective: March 28, 2022
        </h2>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          Welcome to Sandbox VR. Please read on to learn the rules and
          restrictions that govern your use of our website(s), products,
          services and applications (the “Services”), including, without
          limitation, any request to receive information about, or to purchase
          any of the products made available through our website(s) (each, a
          “Product”). Your purchase of any Products will also be governed by any
          other terms made available by us to you during the sales process. If
          you have any questions, comments, or concerns regarding these terms or
          the Services, please contact us at:
        </p>
        <div className="px-5 pt-5">
          <span className="flex text-sm text-[#313542]">
            Email:{" "}
            <span className="text-appblue font-bold">
              support@sandboxvr.com
            </span>
          </span>
          <span className="block text-sm text-[#313542]">
            Address: Neugasse 25, 8810 Horgen
          </span>
        </div>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          These Terms of Use (the “Terms”) are a binding contract between you
          and Greenwich Entertainment AG (“ Greenwich Entertainment AG”,
           “Sandbox VR,” “we” and “us”). Your use of the Services in any way
          means that you agree to all of these Terms, and these Terms will
          remain in effect while you use the Services. These Terms include the
          provisions in this document as well as those in the Privacy Policy.
        </p>
        <p className="pt-5 sm:pt-8 leading-5 text-sm text-[#313542]">
          The Children’s Online Privacy Protection Act (“COPPA”) requires that
          online service providers obtain parental consent before they knowingly
          collect personally identifiable information online from children who
          are under thirteen (13). We do not knowingly collect or solicit
          personally identifiable information from children under thirteen (13),
          or children under the age of sixteen (16) in the European Economic
          Area, without obtaining verifiable consent from that child’s parent or
          guardian (“Parental Consent”), except for the limited amount of
          personally identifiable information we need to collect in order to
          obtain Parental Consent (“Required Information”). Until we have
          received Parental Consent, we will only use Required Information for
          the purpose of obtaining Parental Consent. If you are a child under
          thirteen (13), please do not attempt to register for or otherwise use
          the Services or send any personal information about yourself to us
          before we obtain Parental Consent, except for the Required Information
          in the context of the Parental Consent process. If we learn we have
          collected personal information from a child under thirteen (13), we
          will delete that information as quickly as possible. If you believe
          that a child under thirteen (13) may have provided us with personal
          information (beyond the Required Information) without our obtaining
          Parental Consent, please contact us at privacy@sandboxvr.com.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          What are the basics of using Sandbox VR?
        </h2>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          You represent and warrant that you are an individual of legal age to
          form a binding contract (or if not, you’ve received your parent’s or
          guardian’s permission to use the Services and have gotten your parent
          or guardian to agree to these Terms on your behalf).
        </p>
        <p className="pt-5 leading-5 text-sm text-[#313542]">
          You will only use the Services and Products you obtain for your own
          internal, personal, non-commercial use, and not on behalf of or for
          the benefit of any third party, and only in a manner that complies
          with all laws that apply to you. If your use of the Services or
          Products is prohibited by applicable laws, then you aren’t authorized
          to use the Services. We can’t and won’t be responsible for your using
          the Services or Products in a way that breaks the law.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          What about messaging?
        </h2>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          As part of the Services, you may receive communications through the
          Services, including messages that Sandbox VR sends you (for example,
          via email or SMS).
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          Are there restrictions in how I can use the Services?
        </h2>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          You represent, warrant, and agree that you will not provide or
          contribute anything, including any Content or User Submission (as
          those terms are defined below), to the Services, or otherwise use or
          interact with the Services, in a manner that:
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          a. infringes or violates the intellectual property rights or any other
          rights of anyone else (including Sandbox VR);
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          b. violates any law or regulation, including, without limitation, any
          applicable export control laws, privacy laws or any other purpose not
          reasonably intended by Sandbox VR;
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          c. is dangerous, harmful, fraudulent, deceptive, threatening,
          harassing, defamatory, obscene, or otherwise objectionable;
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          d. attempts, in any manner, to obtain the password, account, or other
          security information from any other user;
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          e. violates the security of any computer network, or cracks any
          passwords or security encryption codes;
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          f. runs Maillist, Listserv, any form of auto-responder or “spam” on
          the Services, or any processes that run or are activated while you are
          not logged into the Services, or that otherwise interfere with the
          proper working of the Services (including by placing an unreasonable
          load on the Services’ infrastructure);
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          g. “crawls,” “scrapes,” or “spiders” any page, data, or portion of or
          relating to the Services or Content (through use of manual or
          automated means);
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          h. copies or stores any significant portion of the Content; or
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          i. decompiles, reverse engineers, or otherwise attempts to obtain the
          source code or underlying ideas or information of or relating to the
          Products or Services.
        </p>
        <p className="leading-5 text-sm text-[#313542]">
          A violation of any of the foregoing is grounds for termination of your
          right to use or access the Services.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          What are my rights in the Services?
        </h2>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          The materials displayed or performed or available on or through the
          Services, including, but not limited to, text, graphics, data,
          articles, photos, images, illustrations, User Submissions (as defined
          below) and so forth (all of the foregoing, the “Content”) are
          protected by copyright and/or other intellectual property laws. You
          promise to abide by all copyright notices, trademark rules,
          information, and restrictions contained in any Content you access
          through the Services, and you won’t use, copy, reproduce, modify,
          translate, publish, broadcast, transmit, distribute, perform, upload,
          display, license, sell, commercialize or otherwise exploit for any
          purpose any Content not owned by you, (i) without the prior consent of
          the owner of that Content or (ii) in a way that violates someone
          else’s (including Sandbox VRS) rights.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          Subject to these Terms, we grant each user of the Services a
          worldwide, non-exclusive, non-sublicensable and non-transferable
          license to use (i.e., to download and display locally) Content solely
          for purposes of using the Services. Use, reproduction, modification,
          distribution or storage of any Content for any purpose other than
          using the Services is expressly prohibited without prior
          written permission from us. You understand that Sandbox VR owns the
          Services. You won’t modify, publish, transmit, participate in the
          transfer or sale of, reproduce (except as expressly provided in this
          Section), create derivative works based on, or otherwise exploit any
          of the Services. The Services may allow you to copy or download
          certain Content, but please remember that even where these
          functionalities exist, all the restrictions in this section still
          apply.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          What about anything I contribute to the Services – do I have to grant
          any licenses to Sandbox VR or to other users?
        </h2>
        <span className="block uppercase text-xs tracking-[3px] pt-3">
          User Submissions
        </span>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          Anything you post, upload, share, store, or otherwise provide through
          the Services is your “User Submission”. Some User Submissions may be
          viewable by other users. You are solely responsible for all User
          Submissions you contribute to the Services. You represent that all
          User Submissions submitted by you are accurate, complete, up-to-date,
          and in compliance with all applicable laws, rules and regulations. You
          agree that you will not post, upload, share, store, or otherwise
          provide through the Services any User Submissions that: (i) infringe
          any third partys copyrights or other rights (e.g., trademark, privacy
          rights, etc.); (ii) contain sexually explicit content or pornography;
          (iii) contain hateful, defamatory, or discriminatory content or incite
          hatred against any individual or group; (iv) exploit minors; (v)
          depict unlawful acts or extreme violence; (vi) depict animal cruelty
          or extreme violence towards animals; (vii) promote fraudulent schemes,
          multi-level marketing (MLM) schemes, get rich quick schemes, online
          gaming and gambling, cash gifting, work from home businesses, or any
          other dubious money-making ventures; or (viii) that violate any law.
        </p>
        <span className="block uppercase text-xs tracking-[3px] pt-3">
          LICENSES
        </span>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          In order to display your User Submissions on the Services, and to
          allow other users to enjoy them (where applicable), you grant us
          certain rights in those User Submissions (see below for more
          information). Please note that all of the following licenses are
          subject to our 
          <span className="text-appblue font-bold">Privacy Policy</span> to the
          extent they relate to User Submissions that are also your
          personally-identifiable information. For all User Submissions, you
          hereby grant Sandbox VR a license to translate, modify (for technical
          purposes, for example, making sure your content is viewable on a
          mobile device as well as a computer) and reproduce and otherwise act
          with respect to such User Submissions, in each case to enable us to
          operate the Services, as described in more detail below. This is a
          license only – your ownership in User Submissions is not affected.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          If you store a User Submission in your own personal Sandbox VR
          account, in a manner that is not viewable by any other user except you
          (a “Personal User Submission”), you grant Sandbox VR the license
          above, as well as a license to display, perform, and distribute your
          Personal User Submission for the sole purpose of making that Personal
          User Submission accessible to you and providing the Services necessary
          to do so.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          If you share a User Submission in a manner that only certain specified
          users can view (for example, a private message to one or more other
          users) (a “Limited Audience User Submission”), then you grant Sandbox
          VR the licenses above, as well as a license to display, perform, and
          distribute your Limited Audience User Submission for the sole purpose
          of making that Limited Audience User Submission accessible to such
          other specified users, and providing the Services necessary to do so.
          Also, you grant such other specified users a license to access that
          Limited Audience User Submission, and to use and exercise all rights
          in it, as permitted by the functionality of the Services.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          If you share a User Submission publicly on the Services and/or in a
          manner that more than just you or certain specified users can view, or
          if you provide us (in a direct email or otherwise) with any feedback,
          suggestions, improvements, enhancements, and/or feature requests
          relating to the Services (each of the foregoing, a “Public User
          Submission”), then you grant Sandbox VR the licenses above, as well as
          a license to display, perform, and distribute your Public User
          Submission for the purpose of making that Public User Submission
          accessible to all Sandbox VR users and providing the Services
          necessary to do so, as well as all other rights necessary to use and
          exercise all rights in that Public User Submission in connection with
          the Services and/or otherwise in connection with Sandbox VRS business.
          Also, you grant all other users of the Services a license to access
          that Public User Submission, and to use and exercise all rights in it,
          as permitted by the functionality of the Services. You agree that the
          licenses you grant are royalty-free, perpetual, sublicensable,
          irrevocable, and worldwide .
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          Certain features of the Services allow you to share information with
          others, including through your social networks or other services where
          you have an account (“Third Party Accounts”). When Content is
          authorized for sharing, we will clearly identify the Content you are
          authorized to redistribute and the ways you may redistribute it,
          usually by providing a “share” button on or near the Content. If you
          share information from the Services with others through your Third
          Party Accounts, such as your social networks, you authorize Sandbox VR
          to share that information with the applicable Third Party Account
          provider. Please review the policies of any Third Party Account
          providers you share information with or through for additional
          information about how they may use your information. If you
          redistribute Content, you must be able to edit or delete any Content
          you redistribute, and you must edit or delete it promptly upon our
          request.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          conform and adapt those User Submissions to the technical requirements
          of connection networks, devices, services, or media, and the foregoing
          licenses include the rights to do so.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          Who is responsible for what I see and do on the Services?
        </h2>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          Any information or Content publicly posted or privately transmitted
          through the Services is the sole responsibility of the person from
          whom such Content originated, and you access all such information and
          Content at your own risk, and we aren’t liable for any errors or
          omissions in that information or Content or for any damages or loss
          you might suffer in connection with it. We cannot control and have no
          duty to take any action regarding how you may interpret and use the
          Content or what actions you may take as a result of having been
          exposed to the Content, and you hereby release us from all liability
          for you having acquired or not acquired Content through the Services.
          We can’t guarantee the identity of any users with whom you interact in
          using the Services and are not responsible for which users gain access
          to the Services.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          You are responsible for all Content you contribute, in any manner, to
          the Services, and you represent and warrant you have all rights
          necessary to do so, in the manner in which you contribute it. The
          Services may contain links or connections to third-party websites or
          services that are not owned or controlled by Sandbox VR. When you
          access third-party websites or use third-party services, you accept
          that there are risks in doing so, and that Sandbox VR is not
          responsible for such risks
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          Sandbox VR has no control over, and assumes no responsibility for, the
          content, accuracy, privacy policies, or practices of or opinions
          expressed in any third-party websites or by any third party that you
          interact with through the Services. In addition, Sandbox VR will not
          and cannot monitor, verify, censor or edit the content of any
          third-party site or service. We encourage you to be aware when
          you leave the Services and to read the terms and conditions and
          privacy policy of each third-party website or service that you visit
          or utilize. By using the Services, you release and hold us harmless
          from any and all liability arising from your use of any third-party
          website or service.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          Your interactions with organizations and/or individuals found on or
          through the Services, including payment and delivery of goods or
          services, and any other terms, conditions, warranties or
          representations associated with such dealings, are solely between you
          and such organizations and/or individuals. You should make whatever
          investigation you feel necessary or appropriate before proceeding with
          any online or offline transaction with any of these third parties. You
          agree that Sandbox VR shall not be responsible or liable for any loss
          or damage of any sort incurred as the result of any such dealings. If
          there is a dispute between participants on this site or Services, or
          between users and any third party, you agree that Sandbox VR is under
          no obligation to become involved. In the event that you have a dispute
          with one or more other users, you release Sandbox VR, its directors,
          officers, employees, agents, and successors from claims, demands, and
          damages of every kind or nature, known or unknown, suspected or
          unsuspected, disclosed or undisclosed, arising out of or in any way
          related to such disputes and/or our Services. You shall and hereby do
          waive California Civil Code Section 1542 or any similar law of any
          jurisdiction, which says in substance: “A general release does not
          extend to claims that the creditor or releasing party does not know or
          suspect to exist in his or her favor at the time of executing the
          release and that, if known by him or her, would have materially
          affected his or her settlement with the debtor or released party.”
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          Will Sandbox VR ever change the Services?
        </h2>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          We’re always trying to improve our Products and Services, so they may
          change over time. We may suspend or discontinue any part of the
          Services, or we may introduce new features or impose limits on certain
          features or restrict access to parts or all of the Services. We’ll try
          to give you notice when we make a material change to the Services that
          would adversely affect you, but this isn’t always practical. We
          reserve the right to remove any Content from the Services at any time,
          for any reason (including, but not limited to, if someone alleges you
          contributed that Content in violation of these Terms), in our sole
          discretion, and without notice.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          Do the Services cost anything?
        </h2>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          Products are offered at the prices set forth on our Paid Products
          page 
          <Link
            href="https://sandboxvr.com/booking"
            className="text-appblue font-bold"
          >
            https://sandboxvr.com/booking
          </Link>
          , and you may choose to purchase Products through the 
          <Link href="https://sandboxvr.com" className="text-appblue font-bold">
            https://sandboxvr.com
          </Link>
           website. Sandbox VR may limit or cancel quantities of Products
          purchased, and it reserves the right to refuse any order. In the event
          Sandbox VR needs to make a change to an order, it will attempt to
          notify you by contacting the email address, billing address, and/or
          phone number provided at the time the order was made. The prices
          displayed are quoted in U.S. currency and are valid only in the United
          States. Prices are subject to change at any time. Sales tax will be
          determined by the shipping address of the order and will automatically
          be added to the order. Sandbox VR is required by law to apply sales
          tax to orders to certain states. Purchased Products will be shipped to
          the shipping address of the order. Any payment terms presented to you
          in the process of purchasing Products are deemed part of these Terms.
        </p>
        <p className="pt-5 leading-5 text-sm text-[#313542]">
          Note that if you elect to receive text messages through the Services,
          data and message rates may apply. Any and all such charges, fees or
          costs are your sole responsibility. You should consult with your
          wireless carrier to determine what rates, charges, fees or costs may
          apply to your use of the Services.
        </p>
        <p className="pt-1 leading-5 text-sm text-[#313542]">
          a. Billing. We use a third-party payment processor (the “Payment
          Processor”) to bill you through a payment account linked to your
          account on the Services (your “Billing Account”). The processing of
          payments will be subject to the terms, conditions and privacy policies
          of the Payment Processor in addition to these Terms. Currently, we
          use Worldline or Stripe, Inc., as our Payment Processor, depending on
          the purchaser’s location. You can access Worldline’s{" "}
          <Link href="/terms" className="font-bold text-appblue">
            Terms of Service{" "}
          </Link>
          at Terms of Service  and their Privacy Policy at 
          <Link href="/terms" className="font-bold text-appblue">
            Privacy Notice
          </Link>
          . You can access Stripe’s Terms of Service at Terms of Service and
          their Privacy Policy at 
          <Link href="/terms" className="font-bold text-appblue">
            Privacy Notice
          </Link>
          . We are not responsible for any error by, or other acts or omissions
          of, the Payment Processor. By choosing to purchase Products, you agree
          to pay us, through the Payment Processor, all charges at the prices
          then in effect for any such Products in accordance with the applicable
          payment terms, and you authorize us, through the Payment Processor, to
          charge your chosen payment provider (your “Payment Method”). You agree
          to make payment using that selected Payment Method. We reserve the
          right to correct any errors or mistakes that the Payment Processor
          makes even if it has already requested or received payment.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          b. Payment Method. The terms of your payment will be based on your
          Payment Method and may be determined by agreements between you and the
          financial institution, credit card issuer or other provider of your
          chosen Payment Method. If we, through the Payment Processor, do not
          receive payment from you, you agree to pay all amounts due on your
          Billing Account upon demand.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          c. Current Information Required. YOU MUST PROVIDE CURRENT, COMPLETE
          AND ACCURATE INFORMATION FOR YOUR BILLING ACCOUNT. YOU MUST PROMPTLY
          UPDATE ALL INFORMATION TO KEEP YOUR BILLING ACCOUNT CURRENT, COMPLETE
          AND ACCURATE.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          d. Change in Amount Authorized. If the amount to be charged to your
          Billing Account varies from the amount you preauthorized (other than
          due to the imposition or change in the amount of state sales taxes),
          you have the right to receive, and we shall provide, notice of the
          amount to be charged and the date of the charge before the scheduled
          date of the transaction. Any agreement you have with your payment
          provider will govern your use of your Payment Method. You agree that
          we may accumulate charges incurred and submit them as one or more
          aggregate charges, including during or at the end of each billing
          cycle.
        </p>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          e. Free Trials and Other Promotions. Any free trial or other promotion
          that provides access to free Products.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          What if I want to stop using the Services?
        </h2>
        <p className="pt-3 leading-5 text-sm text-[#313542]">
          You’re free to do that at any time; please refer to our 
          <Link className="font-bold text-appblue" href="/dataprotection">
            Privacy Policy
          </Link>
          , as well as the licenses above, to understand how we treat
          information you provide to us after you have stopped using our
          Services. Sandbox VR is also free to terminate (or suspend access to)
          your use of the Services for any reason in our discretion, including
          your breach of these Terms. Sandbox VR has the sole right to decide
          whether you are in violation of any of the restrictions set forth in
          these Terms. Provisions that, by their nature, should survive
          termination of these Terms shall survive termination. By way of
          example, all of the following will survive termination: any obligation
          you have to pay us or indemnify us, any limitations on our liability,
          any terms regarding ownership or intellectual property rights, and
          terms regarding disputes between us, including without limitation the
          arbitration agreement.
        </p>
        <h2 className="uppercase text-base tracking-[3px] text-[#313542] pt-5 sm:pt-10 leading-5">
          What else do I need to know?
        </h2>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          <span className="italic underline">Warranty Disclaimer.</span> Sandbox
          VR and its licensors, suppliers, partners, parent, subsidiaries or
          affiliated entities, and each of their respective officers, directors,
          members, employees, consultants, contract employees, representatives
          and agents, and each of their respective successors and assigns
          (Sandbox VR and all such parties together, the “Sandbox VR Parties”)
          make no representations or warranties concerning the Services,
          including without limitation regarding any Content contained in or
          accessed through the Services or any Products, and the Sandbox VR
          Parties will not be responsible or liable for the accuracy, copyright
          compliance, legality, or decency of material contained in or accessed
          through the Services or any claims, actions, suits procedures, costs,
          expenses, damages or liabilities arising out of use of, or in any way
          related to your participation in, the Services. The Sandbox VR Parties
          make no representations or warranties regarding suggestions or
          recommendations of services or products offered or purchased through
          or in connection with the Services including, without limitation, any
          Products. Products and services purchased or offered (whether or not
          following such recommendations and suggestions) through the Services
          are provided “AS-IS” and without any warranty of any kind from the
          Sandbox VR Parties or others (unless, with respect to such others
          only, provided expressly and unambiguously in writing by a designated
          third party for a specific product). THE SERVICES AND CONTENT ARE
          PROVIDED BY SANDBOX VR (AND ITS LICENSORS AND SUPPLIERS) ON AN “AS-IS”
          BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
          INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT USE OF THE
          SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. SOME STATES DO NOT ALLOW
          LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE
          LIMITATIONS MAY NOT APPLY TO YOU.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          <span className="italic underline">Limitation of Liability.</span> TO
          THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES
          AND UNDER NO LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT,
          CONTRACT, STRICT LIABILITY, OR OTHERWISE) SHALL ANY OF THE SANDBOX VR
          PARTIES BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT,
          SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY KIND,
          INCLUDING DAMAGES FOR LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF
          DATA, LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR
          COMPUTER FAILURE OR MALFUNCTION, (B) ANY SUBSTITUTE GOODS, SERVICES OR
          TECHNOLOGY, (C) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER
          OF (I) ONE-HUNDRED ($100) DOLLARS OR (II) THE AMOUNTS PAID AND/OR
          PAYABLE BY YOU TO SANDBOX VR IN CONNECTION WITH THE SERVICES IN THE
          TWELVE (12) MONTH PERIOD PRECEDING THIS APPLICABLE CLAIM OR (D) ANY
          MATTER BEYOND OUR REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE
          EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL OR CERTAIN
          OTHER DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO
          YOU.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          <span className="italic underline">Indemnity.</span> You agree to
          indemnify and hold the Sandbox VR Parties harmless from and against
          any and all claims, liabilities, damages (actual and consequential),
          losses and expenses (including attorneys’ fees) arising from or in any
          way related to any claims relating to (a) your use of the Servicesand
          any Products, and (b) your violation of these Terms. In the event of
          such a claim, suit, or action (“Claim”), we will attempt to provide
          notice of the Claim to the contact information we have for your
          account (provided that failure to deliver such notice shall not
          eliminate or reduce your indemnification obligations hereunder).
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          <span className="italic underline">Assignment.</span> You may not
          assign, delegate or transfer these Terms or your rights or obligations
          hereunder, or your Services account, in any way (by operation of law
          or otherwise) without Sandbox VRS prior written consent. We may
          transfer, assign, or delegate these Terms and our rights and
          obligations without consent.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          <span className="italic underline">Choice of Law.</span> These Terms
          are governed by Swiss law exclusively, without regard to the conflicts
          of laws provisions thereof.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          <span className="italic underline">Arbitration Agreement.</span>{" "}
          Please read the following ARBITRATION AGREEMENT carefully because it
          requires you to arbitrate certain disputes and claims with Sandbox VR
          and limits the manner in which you can seek relief from Sandbox VR.
          Both you and Sandbox VR acknowledge and agree that for the purposes of
          any dispute arising out of or relating to the subject matter of these
          Terms, Sandbox VRS officers, directors, employees and independent
          contractors (“Personnel”) are third-party beneficiaries of these
          Terms, and that upon your acceptance of these Terms, Personnel will
          have the right (and will be deemed to have accepted the right) to
          enforce these Terms against you as the third-party beneficiary hereof.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          (a) <span className="italic">Arbitration Rules;</span> Applicability
          of Arbitration Agreement. The parties shall use their best efforts to
          settle any dispute, claim, question, or disagreement arising out of or
          relating to the subject matter of these Terms directly through
          good-faith negotiations, which shall be a precondition to either party
          initiating arbitration. If such negotiations do not resolve the
          dispute, it shall be finally settled by binding arbitration
          in Zürich, Switzerland. The arbitration will proceed in the English
          language, in accordance with the JAMS Streamlined Arbitration Rules
          and Procedures (the “Rules”) then in effect, by one commercial
          arbitrator with substantial experience in resolving intellectual
          property and commercial contract disputes. The arbitrator shall be
          selected from the appropriate list of JAMS arbitrators in accordance
          with such Rules. Judgment upon the award rendered by such arbitrator
          may be entered in any court of competent jurisdiction.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          (b) <span className="italic">Costs of Arbitration.</span> The Rules
          will govern payment of all arbitration fees. Sandbox VR will pay all
          arbitration fees for claims less than ten thousand ($10,000) dollars,
          or a higher dollar value if required by the applicable law . Sandbox
          VR will not seek its attorneys’ fees and costs in arbitration unless
          the arbitrator determines that your claim is frivolous.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          (c) <span className="italic">Small Claims Court; Infringement.</span>{" "}
          Either you or Sandbox VR may assert claims, if they qualify, in small
          claims court in Zürich, Switzerland or any Swiss canton where you live
          or work. Furthermore, notwithstanding the foregoing obligation to
          arbitrate disputes, each party shall have the right to pursue
          injunctive or other equitable relief at any time, from any court of
          competent jurisdiction, to prevent the actual or threatened
          infringement, misappropriation or violation of a partys copyrights,
          trademarks, trade secrets, patents or other intellectual property
          rights.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          (d) <span className="italic">Waiver of Jury Trial.</span> YOU AND
          SANDBOX VR WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO
          COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR JURY. You and Sandbox VR
          are instead choosing to have claims and disputes resolved by
          arbitration. Arbitration procedures are typically more limited, more
          efficient, and less costly than rules applicable in court and are
          subject to very limited review by a court. In any litigation between
          you and Sandbox VR over whether to vacate or enforce an arbitration
          award, YOU AND SANDBOX VR WAIVE ALL RIGHTS TO A JURY TRIAL, and elect
          instead to have the dispute be resolved by a judge.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          (e) 
          <span className="italic">
            Waiver of Class or Consolidated Actions.
          </span>{" "}
          ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT
          MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A
          CLASS BASIS. CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE
          ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY
          OTHER CUSTOMER OR USER. If however, this waiver of class or
          consolidated actions is deemed invalid or unenforceable, neither you
          nor Sandbox VR is entitled to arbitration; instead all claims and
          disputes will be resolved in a court as set forth in (g) below.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          (f) <span className="italic">Opt-out.</span> You have the right to opt
          out of the provisions of this Section by sending written notice of
          your decision to opt out to the following email
          address: support@sandboxvr.com submitted within thirty (30) days of
          first accepting these Terms. You must include (i) your name and
          residence address, (ii) the email address and/or telephone number
          associated with your account, and (iii) a clear statement that you
          want to opt out of these Terms’ arbitration agreement.
        </p>
        <p className="pt-4 leading-5 text-sm text-[#313542]">
          (g) <span className="italic">Exclusive Venue.</span> If you send the
          opt-out notice in (f), and/or in any circumstances where the foregoing
          arbitration agreement permits either you or Sandbox VR to litigate any
          dispute arising out of or relating to the subject matter of these
          Terms in court, then the foregoing arbitration agreement will not
          apply to either party, and both you and Sandbox VR agree that any
          judicial proceeding (other than small claims actions) will be brought
          in the Zürich cantonal court. located in, respectively, Zürich, or the
          federal district in which that county falls.
        </p>
        <p className="pt-4 leading-5 sm:pb-20 pb-10 text-sm text-[#313542]">
          (h) <span className="italic">Severability.</span> If the prohibition against class actions and other
          claims brought on behalf of third parties contained above is found to
          be unenforceable, then all of the preceding language in this
          Arbitration Agreement section will be null and void. This arbitration
          agreement will survive the termination of your relationship with
          Sandbox VR. Miscellaneous. You will be responsible for paying,
          withholding, filing, and reporting all taxes, duties, and other
          governmental assessments associated with your activity in connection
          with the Services, provided that the Sandbox VR may, in its sole
          discretion, do any of the foregoing on your behalf or for itself as it
          sees fit. The failure of either you or us to exercise, in any way, any
          right herein shall not be deemed a waiver of any further rights
          hereunder. If any provision of these Terms are found to be
          unenforceable or invalid, that provision will be limited or
          eliminated, to the minimum extent necessary, so that these Terms shall
          otherwise remain in full force and effect and enforceable. You and
          Sandbox VR agree that these Terms are the complete and exclusive
          statement of the mutual understanding between you and Sandbox VR, and
          that these Terms supersede and cancel all previous written and oral
          agreements, communications and other understandings relating to the
          subject matter of these Terms. You hereby acknowledge and agree that
          you are not an employee, agent, partner, or joint venture of Sandbox
          VR, and you do not have any authority of any kind to bind Sandbox VR
          in any respect whatsoever. Except as expressly set forth in the
          section above regarding the arbitration agreement, you and Sandbox VR
          agree there are no third-party beneficiaries intended under these
          Terms.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Terms;
