// Email storage using localStorage (no database)

const STORAGE_KEY = 'gmail_emails'

// Generate long email content
const generateLongEmailContent = (template) => {
  const templates = {
    project: `Hi there,

I wanted to provide you with a comprehensive update on the project we've been working on. Over the past few weeks, we've made significant progress across multiple fronts, and I believe it's important to keep everyone in the loop.

First and foremost, let's talk about the technical implementation. We've successfully completed the initial phase of development, which involved setting up the core infrastructure and establishing the foundational architecture. The team has been working diligently to ensure that all components are properly integrated and functioning as expected.

The frontend development has been particularly exciting. We've implemented a modern, responsive design that adapts seamlessly across different devices and screen sizes. The user interface is intuitive and user-friendly, with careful attention paid to accessibility standards and best practices.

On the backend, we've made substantial improvements to our API architecture. We've optimized database queries, implemented caching strategies, and enhanced our error handling mechanisms. These changes have resulted in significantly improved performance and reliability.

We've also been working closely with the design team to refine the user experience. Through multiple rounds of user testing and feedback sessions, we've identified several areas for improvement and have implemented changes accordingly. The feedback has been overwhelmingly positive, and we're confident that the final product will exceed expectations.

Looking ahead, we have a clear roadmap for the next phase. We'll be focusing on advanced features, performance optimization, and comprehensive testing. We're also planning to conduct additional user research to ensure that we're meeting all user needs and expectations.

I'd love to schedule a meeting to discuss this in more detail and answer any questions you might have. Please let me know what times work best for you, and I'll coordinate with the team to find a suitable slot.

Thank you for your continued support and patience throughout this process. I'm excited about what we're building together.

Best regards,
Project Team`,

    newsletter: `Hello and welcome to this week's comprehensive newsletter!

We're thrilled to bring you the latest updates, insights, and developments from across the industry. This week has been particularly eventful, with several major announcements and breakthroughs worth highlighting.

Let's start with technology news. The tech world has been abuzz with discussions about artificial intelligence and machine learning. Major companies have announced new AI-powered tools and services that promise to revolutionize how we work and interact with technology. These developments represent significant strides forward in making AI more accessible and practical for everyday use.

In the realm of software development, we've seen exciting updates to popular frameworks and libraries. These updates bring improved performance, new features, and enhanced developer experience. If you're working with these technologies, we highly recommend checking out the latest versions and migration guides.

The startup ecosystem continues to thrive, with several companies securing significant funding rounds. These investments reflect confidence in innovative business models and cutting-edge technologies. It's an exciting time to be part of the tech community, with opportunities emerging across various sectors.

We've also been tracking trends in remote work and collaboration tools. As teams continue to adapt to distributed work environments, new tools and practices are emerging to facilitate effective collaboration. These developments are reshaping how we think about workplace productivity and team dynamics.

On the product front, we've been working on several exciting features that we're looking forward to sharing with you soon. Our development team has been hard at work, and we're confident that these new capabilities will provide significant value to our users.

We'd also like to take this opportunity to thank our community for their continued support and feedback. Your input has been invaluable in shaping our direction and priorities. We're committed to listening to your needs and incorporating your suggestions into our roadmap.

As always, we encourage you to reach out with any questions, comments, or ideas. We're here to help and would love to hear from you.

Stay tuned for more updates in the coming weeks!

Warm regards,
Newsletter Team`,

    business: `Dear Valued Partner,

I hope this message finds you well. I'm writing to discuss an important business opportunity that I believe will be of significant interest to you and your organization.

Over the past several months, we've been analyzing market trends and identifying areas where we can create mutual value. Through our research and strategic planning, we've developed a comprehensive proposal that addresses key challenges and opportunities in our industry.

Our proposal focuses on several core areas. First, we're looking to establish a strategic partnership that leverages the strengths of both our organizations. By combining our resources, expertise, and market presence, we can achieve outcomes that would be difficult to accomplish independently.

Second, we've identified specific market segments where we can collaborate to deliver innovative solutions. These segments represent significant growth opportunities, and we believe that a joint approach will allow us to capture market share more effectively than we could individually.

Third, we're proposing a framework for knowledge sharing and collaborative innovation. This framework would facilitate the exchange of best practices, technical expertise, and strategic insights. We believe this will create a competitive advantage and drive value for both parties.

The financial aspects of this proposal have been carefully considered. We've developed a model that ensures fair distribution of costs and benefits, with clear mechanisms for tracking performance and adjusting as needed. We're confident that this structure will create sustainable value for all stakeholders.

We've also thought carefully about the implementation timeline and resource requirements. Our plan includes detailed phases with clear milestones and deliverables. We're prepared to dedicate the necessary resources to ensure successful execution.

I would welcome the opportunity to discuss this proposal with you in person. I believe that a face-to-face conversation would allow us to explore the details more thoroughly and address any questions or concerns you might have.

Please let me know your availability, and I'll coordinate with my team to schedule a meeting at your convenience. I'm confident that we can find a mutually beneficial arrangement that advances both our strategic objectives.

Thank you for considering this opportunity. I look forward to hearing from you.

Best regards,
Business Development Team`,

    personal: `Hey!

I hope you're doing well! It's been a while since we last caught up, and I wanted to reach out and see how things are going with you.

Life has been pretty busy on my end, but in a good way. I've been working on some exciting projects that I'm really passionate about. It's been challenging at times, but I'm learning a lot and feeling like I'm growing both personally and professionally.

I've also been trying to make more time for hobbies and things I enjoy. I've gotten back into reading, which has been really nice. There's something peaceful about curling up with a good book at the end of a long day. I've been working through a list of recommendations from friends, and I've discovered some amazing authors I'd never heard of before.

On the social front, I've been making an effort to stay connected with friends and family. It's easy to get caught up in work and let relationships slide, but I've been trying to be more intentional about maintaining those connections. I've had some great conversations and made some wonderful memories recently.

I've also been thinking a lot about future plans and goals. There are some things I'd like to accomplish in the coming year, and I'm starting to put together a plan to make them happen. It's exciting to think about the possibilities and what the future might hold.

How have things been on your end? I'd love to hear what you've been up to and what's been happening in your life. Are there any exciting developments or changes I should know about?

I was also thinking it might be nice to get together soon, if you're up for it. It would be great to catch up in person and spend some quality time together. Let me know what works for you, and we can figure out a time that works for both of us.

Anyway, I should probably wrap this up. I just wanted to reach out and let you know I'm thinking of you. I hope everything is going well, and I'm looking forward to hearing from you soon!

Take care,
Your Friend`,

    support: `Hello,

Thank you for reaching out to our support team. We've received your inquiry and want to ensure that we address your concerns thoroughly and effectively.

I understand that you've been experiencing some challenges, and I want to assure you that we take your feedback seriously. Our team has reviewed your case, and we're committed to finding a resolution that meets your needs.

Let me provide you with some detailed information about what we've found and the steps we're taking to address the situation.

First, regarding the technical issue you mentioned, our engineering team has conducted a thorough investigation. They've identified the root cause and have developed a fix that should resolve the problem. This fix has been tested extensively and is ready to be deployed. We expect to have this resolved within the next 24-48 hours.

In the meantime, we've implemented a temporary workaround that should help mitigate the impact while we roll out the permanent solution. Our support documentation has been updated with detailed instructions on how to use this workaround, and I've included a link to these resources below.

We've also reviewed your account history and usage patterns to better understand the context of your issue. This analysis has helped us identify some additional improvements we can make to prevent similar issues in the future.

Additionally, we want to make sure you're aware of all the resources available to you. We have comprehensive documentation, video tutorials, and a community forum where you can connect with other users and share experiences. These resources are regularly updated and can be valuable tools for getting the most out of our platform.

We also want to acknowledge the inconvenience this may have caused and apologize for any frustration you've experienced. Customer satisfaction is our top priority, and we're committed to continuously improving our service.

If you have any additional questions or concerns, please don't hesitate to reach out. Our support team is available 24/7, and we're here to help in any way we can.

Thank you for your patience and for being a valued customer. We appreciate your feedback and are grateful for the opportunity to serve you.

Best regards,
Support Team`,

    meeting: `Hi Team,

I wanted to follow up on our recent meeting and provide a summary of the key points we discussed, along with action items and next steps.

First, let me thank everyone for their active participation and valuable contributions. The discussion was productive, and I believe we made significant progress on several important topics.

We covered a lot of ground during our session. We discussed the current status of our ongoing projects, reviewed performance metrics, and identified areas where we can improve our processes and workflows.

One of the key topics was our Q1 objectives and how we're tracking against our goals. We reviewed the progress we've made so far and discussed what we need to focus on in the coming weeks to ensure we meet our targets. There was good alignment on priorities, and I'm confident we have a clear path forward.

We also spent time discussing resource allocation and capacity planning. We reviewed current workloads and identified areas where we might need additional support or where we can optimize our existing resources. This discussion will help us make informed decisions about staffing and project assignments.

Another important topic was our communication and collaboration processes. We identified some areas where we can improve how we share information and work together. We agreed on some specific changes we'll implement, and I'll be following up with more details on these initiatives.

We also discussed upcoming deadlines and milestones. We reviewed our timeline and identified any potential risks or challenges we need to be aware of. We developed contingency plans for the most critical items and assigned owners to monitor and address any issues that arise.

I've attached a detailed summary document that includes all the action items, owners, and deadlines we discussed. Please review this document and let me know if you have any questions or if anything needs clarification.

Our next meeting is scheduled for next week, and I'll send out a calendar invite with the details. In the meantime, please don't hesitate to reach out if you need anything or have any questions.

Thank you again for your time and contributions. I'm looking forward to continuing our work together.

Best regards,
Team Lead`
  }
  return templates[template] || templates.project
}

// Initialize with sample emails if storage is empty
const initializeSampleEmails = () => {
  const existing = localStorage.getItem(STORAGE_KEY)
  if (!existing) {
    const now = Date.now()
    const sampleEmails = [
      {
        id: '1',
        from: 'jordanmichaels@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Welcome to Project Atlas 🚀',
        body: generateLongEmailContent('project'),
        timestamp: new Date(now - 94608000000).toISOString(), // ~3 years ago
        read: false,
        starred: true,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '2',
        from: 'maria_chen@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Q1 Campaign Feedback and Strategic Recommendations',
        body: generateLongEmailContent('business'),
        timestamp: new Date(now - 94752000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '3',
        from: 'support-service@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Ticket #4521 Resolved - Detailed Resolution Report',
        body: generateLongEmailContent('support'),
        timestamp: new Date(now - 94968000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '4',
        from: 'adiaz@university.edu',
        to: 'snape@gmail.com',
        subject: 'Office Hours Update and Course Information',
        body: generateLongEmailContent('meeting'),
        timestamp: new Date(now - 95184000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '5',
        from: 'chrisanderson@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Top Stories This Week: AI Breakthrough & Clean Tech Rising',
        body: generateLongEmailContent('newsletter'),
        timestamp: new Date(now - 95544000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '6',
        from: 'bethanyj@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Important: Margin Alert Threshold Notification',
        body: generateLongEmailContent('business'),
        timestamp: new Date(now - 96480000000).toISOString(), // ~3 years ago
        read: false,
        starred: true,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '7',
        from: 'noreply-system@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Scheduled Maintenance Tonight (1–3 AM UTC) - Details Inside',
        body: generateLongEmailContent('support'),
        timestamp: new Date(now - 97416000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '8',
        from: 'jennag@healthyplate.co',
        to: 'snape@gmail.com',
        subject: 'Your Order #67829 Shipped 📦 - Tracking Information',
        body: generateLongEmailContent('support'),
        timestamp: new Date(now - 98352000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '9',
        from: 'ryanpatel@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Introduction: Our New Payment API v2.0',
        body: generateLongEmailContent('project'),
        timestamp: new Date(now - 99288000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '10',
        from: 'grace_liu@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Revisions for Banner Designs - Multiple Options',
        body: generateLongEmailContent('business'),
        timestamp: new Date(now - 100224000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '11',
        from: 'urgent-notification@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Contract & Final Headcount Confirmed',
        body: generateLongEmailContent('meeting'),
        timestamp: new Date(now - 101160000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '12',
        from: 'kevinthomas@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Time-Off Policy Update - Important Changes',
        body: generateLongEmailContent('business'),
        timestamp: new Date(now - 102096000000).toISOString(), // ~3 years ago
        read: true,
        starred: true,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '13',
        from: 'noreply-system@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Your Booking Flight UA502 Confirmed',
        body: generateLongEmailContent('support'),
        timestamp: new Date(now - 103032000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '14',
        from: 'radams@photoworks.net',
        to: 'snape@gmail.com',
        subject: 'Engagement Photoshoot Ideas and Planning',
        body: generateLongEmailContent('personal'),
        timestamp: new Date(now - 103968000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '15',
        from: 'secure-account2024@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Security Alert: New Sign-In from Unknown Device',
        body: generateLongEmailContent('support'),
        timestamp: new Date(now - 104904000000).toISOString(), // ~3 years ago
        read: true,
        starred: true,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '16',
        from: 'danielkim@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Contract Draft for Review - Legal Documentation',
        body: generateLongEmailContent('business'),
        timestamp: new Date(now - 105840000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '17',
        from: 'momdad@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Reunion Plans - Family Gathering Discussion',
        body: generateLongEmailContent('personal'),
        timestamp: new Date(now - 106776000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '18',
        from: 'updates@spotify.com',
        to: 'snape@gmail.com',
        subject: 'Wrapped 2025 Is Here! Your Year in Music',
        body: generateLongEmailContent('newsletter'),
        timestamp: new Date(now - 107712000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '19',
        from: 'osparks@bookclub.net',
        to: 'snape@gmail.com',
        subject: 'Next Read: "The Midnight Library" Discussion',
        body: generateLongEmailContent('personal'),
        timestamp: new Date(now - 108648000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '20',
        from: 'update-required@gmail.com',
        to: 'snape@gmail.com',
        subject: '5 New Gadgets That Could Change Your Home',
        body: generateLongEmailContent('newsletter'),
        timestamp: new Date(now - 109584000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '21',
        from: 'nicoleclark@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Product Launch Update - Exciting New Features',
        body: generateLongEmailContent('project'),
        timestamp: new Date(now - 110520000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '22',
        from: 'account-verification@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Tech Summit 2025 - Early Bird Registration Open',
        body: generateLongEmailContent('newsletter'),
        timestamp: new Date(now - 111456000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '23',
        from: 'stephanie_walker@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Career Development Discussion - Next Steps',
        body: generateLongEmailContent('personal'),
        timestamp: new Date(now - 112392000000).toISOString(), // ~3 years ago
        read: false,
        starred: true,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '24',
        from: 'brian.young@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Investment Opportunity - Series A Funding',
        body: generateLongEmailContent('business'),
        timestamp: new Date(now - 113328000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '25',
        from: 'snape@university.edu',
        to: 'snape@gmail.com',
        subject: 'Alumni Network Event - Save the Date',
        body: generateLongEmailContent('meeting'),
        timestamp: new Date(now - 114264000000).toISOString(), // ~3 years ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '26',
        from: 'system-alert@gmail.com',
        to: 'snape@gmail.com',
        subject: '⏰ Final Reminder: Confirm Your Participation Today',
        body: `Hello,

This is a reminder to confirm your participation in the upcoming event.

Due to venue and access constraints, unconfirmed registrations may be released.

Please review your registration details and confirm at the earliest.

Regards,
Event Coordination Team`,
        timestamp: new Date(now - 115200000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '27',
        from: 'automated-notice@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Action Required: Access Suspension Scheduled (Ref: 9F-27)',
        body: `Hello,

This message is being sent as part of a scheduled access integrity review affecting a limited number of accounts. Our records indicate that your account was flagged during a routine synchronization check conducted earlier today.

The flag does not necessarily indicate a security breach. In most cases, this occurs when account activity cannot be fully verified against recent session metadata, including device identifiers, network changes, or incomplete profile validation.

To prevent unintended service interruption, accounts marked under this review are granted a temporary grace period before automated restrictions are applied. During this period, users are advised to review their access status and confirm ownership to ensure continuity.

Please note that failure to complete verification within the allocated review window may result in limited access to associated services until the next audit cycle. This restriction is automatically enforced and cannot be manually overridden once applied.

If you have recently accessed your account from a new location, used a different browser configuration, or interacted with shared resources, this notice may safely be disregarded after verification.

For audit tracking purposes, reference ID 9F-27 has been assigned to this review. We recommend retaining this ID for future correspondence.

Thank you for your prompt attention to this matter.

Access Review Team
Automated Compliance Notification

This message was generated as part of an automated review process. Please do not reply directly to this email.`,
        timestamp: new Date(now - 116136000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '28',
        from: 'davidrodriguez@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Internal Notification: Pending Review Item Requires Attention',
        body: `Hello,

This message is being issued as a follow-up to a pending review item associated with your address that remains unacknowledged in the current review cycle. The notification is being redistributed to ensure visibility before the review window advances to the next phase.

The item in question originated during a routine alignment process intended to standardize documentation references across multiple systems. While the update itself does not introduce new requirements, acknowledgment is required to confirm receipt and awareness for audit logging purposes.

In previous cycles, similar items that were not acknowledged within the review window were automatically escalated by the system. Escalation does not imply a violation; however, it may result in temporary limitations being applied until confirmation is recorded. These limitations are applied automatically and are removed once acknowledgment is completed.

Please note that this message is informational in nature. No immediate corrective action is required unless otherwise indicated during review. If you believe this notification was received in error or does not pertain to your role, it may be safely reviewed and disregarded after acknowledgment.

This notice has been generated by an automated review workflow. Replies to this message are not monitored.

— Documentation & Review
Internal Distribution System`,
        timestamp: new Date(now - 117072000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '29',
        from: 'security-check@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Notice of Record Alignment – Review Window Active',
        body: `Dear Recipient,

As part of an ongoing record alignment initiative, certain entries associated with your contact information have been identified as pending verification. This initiative is conducted periodically to ensure consistency between operational records, audit logs, and access registries.

During this review window, records that remain in an unverified state may be temporarily classified as inactive for alignment purposes. This classification does not affect stored data; however, it may limit access to services or notifications that rely on verified records for delivery and authorization.

The alignment process follows a predefined schedule and advances automatically once the review window closes. After advancement, records cannot be reclassified until the next scheduled cycle, regardless of subsequent updates.

If you have recently reviewed or updated your information, this notice may be disregarded after confirmation. If no action is taken, the system will proceed according to standard alignment rules.

This communication is intended to provide advance notice only and does not constitute a violation or enforcement action.

Compliance Notification System
Automated Record Alignment`,
        timestamp: new Date(now - 118008000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '30',
        from: 'jameswilson@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Automated Service Integrity Review – Non-Disruptive Action Window Open',
        body: `Hello,

This notification is being generated as part of an automated service integrity review designed to ensure consistent access behavior across distributed systems. During this cycle, a subset of active accounts was selected for secondary verification due to recent synchronization events recorded across multiple service layers.

Selection for review does not indicate abnormal usage or policy violations. In most cases, it is triggered by expected activity patterns such as session persistence across devices, network topology changes, or delayed state propagation between services. These patterns are evaluated periodically to reduce false positives during anomaly detection.

To maintain uninterrupted service availability, accounts included in this review are temporarily placed in a monitored state until verification is recorded or the review window expires. Accounts that remain in this state beyond the current window may experience limited access to certain non-critical features until the next evaluation cycle completes.

This process is fully automated and operates independently of manual intervention. No direct response is required if verification has already occurred through normal usage patterns.

Reference information related to this review has been logged for audit continuity and may be referenced in subsequent system-generated notifications.

Service Integrity Automation
Monitoring & Reliability Systems`,
        timestamp: new Date(now - 118944000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '31',
        from: 'important-update@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Notification: Background Credential Validation in Progress',
        body: `Dear User,

As part of scheduled maintenance operations, background credential validation is currently being performed to ensure alignment between authentication services and downstream access controls. This validation occurs routinely and is intended to identify expired, incomplete, or desynchronized credential states.

During validation, credentials that cannot be fully reconciled against recent access metadata may be temporarily marked as pending. This status does not prevent access immediately but may delay authorization for newly initiated sessions until validation completes.

The validation process relies on passive confirmation signals generated during normal usage. In most cases, no direct interaction is required. However, credentials that remain pending after the validation window closes may be queued for additional review during the next cycle.

This notice is being provided to ensure awareness and to reduce confusion should any transient access inconsistencies be observed. Once validation completes, all pending states are automatically cleared.

No response to this message is monitored.

Authentication Services
Automated Maintenance Workflow`,
        timestamp: new Date(now - 119880000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '32',
        from: 'robert_taylor@gmail.com',
        to: 'snape@gmail.com',
        subject: 'System Advisory: Configuration Drift Detected (Low Severity)',
        body: `Hello,

A low-severity configuration drift has been detected during a routine comparison between expected system parameters and current runtime states associated with your account context. Configuration drift commonly occurs as a result of incremental updates, deferred policy propagation, or legacy settings persisting beyond scheduled refresh intervals.

At this time, the detected drift does not present an operational risk and does not require immediate remediation. However, accounts associated with unresolved drift may experience reduced compatibility with newly deployed features or updates until alignment is restored.

Alignment is typically achieved automatically through standard system interactions. In cases where alignment cannot be confirmed, the system may defer certain optional operations to maintain stability across dependent services.

This advisory is informational and is intended to provide context should you observe minor changes in system behavior. Further notifications will only be issued if manual review becomes necessary.

Configuration Management
Systems Reliability Group`,
        timestamp: new Date(now - 120816000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '33',
        from: 'jenniferbrown@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Queued Notice: Session Metadata Reconciliation Pending',
        body: `Hi,

This message serves as a queued notice related to session metadata reconciliation currently pending for your account. Session reconciliation is a background process that ensures consistency between authentication records, session lifecycles, and associated authorization tokens.

Reconciliation may be initiated when session activity spans multiple environments, experiences delayed termination events, or is affected by intermittent connectivity. These conditions are routinely observed and are handled automatically without user intervention in the majority of cases.

While reconciliation is pending, newly initiated sessions may be subject to additional validation steps. These steps are non-disruptive and are designed to prevent propagation of inconsistent state across services.

If reconciliation completes successfully, no further communication will be issued. If additional confirmation is required, follow-up notices will be generated automatically by the system.

Session Management Services
Automated State Processing`,
        timestamp: new Date(now - 121752000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '34',
        from: 'williamdavis@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Operational Notice: Deferred Update Applied to Account Context',
        body: `Dear Recipient,

A deferred operational update has recently been applied to your account context as part of a phased rollout intended to minimize service disruption. Deferred updates are used to align account configurations with updated system baselines while maintaining compatibility with existing workflows.

During the deferral period, certain features may operate under transitional parameters. This does not affect data integrity or stored content; however, some changes may not become visible until full alignment is completed during a subsequent maintenance window.

Accounts that remain in a deferred state beyond the current rollout phase may be subject to additional checks to ensure that baseline requirements are met. These checks are performed automatically and do not require user initiation.

This notice is provided for transparency and to reduce confusion should you encounter minor inconsistencies during the transition period.

Operations & Deployment
Automated Rollout Systems`,
        timestamp: new Date(now - 122688000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '35',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Congratulations on Your Promotion',
        body: `Dear Colleagues,
We are pleased to announce that recent internal role realignments have been successfully completed.
Several team members have transitioned into updated responsibilities following the latest governance review cycle.
Please join us in congratulating all individuals who have accepted their new roles and continue to demonstrate professionalism and adaptability in evolving operational environments.
Further clarification on role-specific access privileges will be shared through departmental briefings where applicable.
Thank you for your continued cooperation and commitment.
Regards,
DullSleep Human Capital Operations`,
        timestamp: new Date(now - 78840000000).toISOString(), // ~2.5 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '36',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Promotion Acknowledgement & Role Confirmation',
        body: `Dear Team,
Congratulations to those who have recently been promoted or reassigned under the revised organizational structure.
As a reminder, promotion does not automatically imply expanded access unless explicitly stated within the role documentation. All promoted individuals are expected to adhere strictly to updated compliance and information stewardship guidelines.
Any questions regarding scope or responsibility should be directed through appropriate managerial channels.
Sincerely,
DullSleep Compliance & Oversight Unit`,
        timestamp: new Date(now - 63072000000).toISOString(), // ~2 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '37',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Role Transition — Congratulations',
        body: `Dear Team,
We extend our congratulations to the personnel who have successfully transitioned into elevated roles this quarter.
These appointments reflect trust, accountability, and alignment with DullSleep's long-term information governance strategy. Role details may vary depending on operational needs and should not be inferred beyond official communications.
Thank you for respecting confidentiality during this transition period.
Regards,
DullSleep Administrative Council`,
        timestamp: new Date(now - 47304000000).toISOString(), // ~1.5 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '38',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Congratulations — Role Update Processed',
        body: `Dear Team Member,
Your promotion acknowledgment has been logged successfully within the internal registry.
Please be advised that system visibility of your updated role may vary across platforms due to synchronization cycles. No action is required unless otherwise notified.
Congratulations, and thank you for your continued service.
— Automated Notice
DullSleep Internal Systems`,
        timestamp: new Date(now - 31536000000).toISOString(), // ~1 year ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '39',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Formal Congratulations on Role Advancement',
        body: `Dear All,
This message serves to formally recognize recent promotions across several divisions.
Promoted roles carry with them heightened responsibility, discretion, and adherence to internal standards.
Please note that documentation updates may lag behind operational enforcement.
Congratulations once again to those entrusted with these roles.
Warm regards,
DullSleep Organizational Development Office`,
        timestamp: new Date(now - 15768000000).toISOString(), // ~6 months ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '60',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Formal Promotion Notice',
        body: `Dear Team,

This is to formally inform you that, effective immediately, Mr. Snape has been elevated to the role of Senior Information Steward within the DullSleep organization.

In this capacity, he will be responsible for overseeing the integrity, continuity, and controlled dissemination of sensitive organizational information across all internal platforms.

Please note that:
* Access policies may be revised without prior notice.
* Certain records may be archived, segmented, or restricted in alignment with governance standards.
* All departments are expected to comply with stewardship directives.

This appointment reflects continued confidence in his discretion, consistency, and commitment to safeguarding critical knowledge.

Further details, where applicable, will be communicated through official channels.

Regards,
DullSleep Information Governance Office`,
        timestamp: new Date(now - 7776000000).toISOString(), // ~3 months ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '40',
        from: 'noreply@bank-security-alert.com',
        to: 'snape@gmail.com',
        subject: 'URGENT: Verify Your Account - Suspicious Activity Detected',
        body: `Dear Valued Customer,

We have detected unusual activity on your account. For your security, we need you to verify your identity immediately.

Please click the link below to verify your account:
https://bank-security-alert.com/verify?token=xyz123

If you do not verify within 24 hours, your account will be temporarily suspended.

Thank you for your immediate attention to this matter.

Bank Security Team
This is an automated message. Please do not reply.`,
        timestamp: new Date(now - 3600000).toISOString(), // 1 hour ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '41',
        from: 'winner@lottery-international.prize',
        to: 'snape@gmail.com',
        subject: '🎉 CONGRATULATIONS! You Won $1,000,000!',
        body: `Dear Winner,

Congratulations! You have been selected as the winner of our International Lottery Prize!

You have won $1,000,000 USD!

To claim your prize, please provide the following information:
- Full name
- Date of birth
- Bank account details
- Social Security Number

Reply to this email immediately to claim your prize. You have 48 hours to respond.

Congratulations again!
Lottery International Prize Team`,
        timestamp: new Date(now - 7200000).toISOString(), // 2 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '42',
        from: 'support@amaz0n-security.com',
        to: 'snape@gmail.com',
        subject: 'Amazon Account Verification Required',
        body: `Hello,

We noticed a recent login attempt from an unrecognized device. For your security, we need to verify your account.

Please verify your account by clicking here:
http://amaz0n-security.com/verify-account

If this wasn't you, please contact us immediately.

Amazon Security Team`,
        timestamp: new Date(now - 10800000).toISOString(), // 3 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '43',
        from: 'nigerian-prince@royal-family.ng',
        to: 'snape@gmail.com',
        subject: 'Urgent Business Proposal - $10 Million Opportunity',
        body: `Dear Sir/Madam,

I am Prince Abubakar, son of the late King of Nigeria. I have $10 million USD that I need to transfer out of the country.

I need your help to complete this transaction. In return, you will receive 30% of the total amount ($3 million).

This is 100% legitimate and confidential. Please reply with your bank account details to proceed.

God bless you.

Prince Abubakar
Royal Family of Nigeria`,
        timestamp: new Date(now - 14400000).toISOString(), // 4 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '44',
        from: 'pharmacy@cheap-meds-online.ru',
        to: 'snape@gmail.com',
        subject: 'Special Offer: Viagra, Cialis - 80% OFF!',
        body: `Hello,

Looking for affordable medications? We have the best prices on prescription drugs!

- Viagra: $0.99 per pill
- Cialis: $1.49 per pill
- No prescription needed!
- Worldwide shipping
- 100% discreet packaging

Order now: http://cheap-meds-online.ru/shop

Limited time offer! Don't miss out!

Best regards,
Online Pharmacy Team`,
        timestamp: new Date(now - 18000000).toISOString(), // 5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '45',
        from: 'microsoft-support@tech-help-desk.net',
        to: 'snape@gmail.com',
        subject: 'Windows License Expired - Renew Now',
        body: `Dear Windows User,

Your Windows license has expired. To continue using Windows, you must renew your license immediately.

Click here to renew: http://tech-help-desk.net/renew-license

Failure to renew within 24 hours will result in your computer being locked.

Microsoft Support Team
Windows License Division`,
        timestamp: new Date(now - 21600000).toISOString(), // 6 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '46',
        from: 'irs-tax-refund@irs-gov-refund.com',
        to: 'snape@gmail.com',
        subject: 'Tax Refund Available - Claim Your $2,847',
        body: `Dear Taxpayer,

You are eligible for a tax refund of $2,847.50.

To claim your refund, please provide:
- Social Security Number
- Date of birth
- Bank routing number

Click here to claim: http://irs-gov-refund.com/claim

This offer expires in 7 days.

Internal Revenue Service
Tax Refund Department`,
        timestamp: new Date(now - 25200000).toISOString(), // 7 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '47',
        from: 'paypal-security@paypal-verify.com',
        to: 'snape@gmail.com',
        subject: 'PayPal Account Limited - Action Required',
        body: `Hello,

Your PayPal account has been temporarily limited due to suspicious activity.

To restore access, please verify your account:
https://paypal-verify.com/restore-account

You have 48 hours to complete verification or your account will be permanently closed.

PayPal Security Team`,
        timestamp: new Date(now - 28800000).toISOString(), // 8 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '48',
        from: 'investment@get-rich-quick-scheme.com',
        to: 'snape@gmail.com',
        subject: 'Make $5,000 Per Week Working From Home!',
        body: `Hello Friend,

Are you tired of your 9-5 job? Make $5,000 per week working from home!

No experience needed! No upfront costs! Just 2 hours per day!

Join thousands of successful people who are making money right now!

Click here to start: http://get-rich-quick-scheme.com/join

This opportunity won't last long!

Best wishes,
Investment Team`,
        timestamp: new Date(now - 32400000).toISOString(), // 9 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '49',
        from: 'apple-id@apple-security-alert.net',
        to: 'snape@gmail.com',
        subject: 'Apple ID Locked - Unlock Now',
        body: `Dear Apple User,

Your Apple ID has been locked for security reasons.

To unlock your account, please verify your identity:
http://apple-security-alert.net/unlock-apple-id

If you don't verify within 24 hours, your account will be permanently disabled.

Apple Security Team`,
        timestamp: new Date(now - 36000000).toISOString(), // 10 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '50',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Important: System Maintenance Notice',
        body: `Dear Team Member,

This is to inform you that our email system will undergo scheduled maintenance this weekend.

During this time, email access may be limited. We apologize for any inconvenience.

If you have any questions, please contact IT support.

Thank you for your understanding.

DullSleep IT Department`,
        timestamp: new Date(now - 5184000000).toISOString(), // ~2 months ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '61',
        from: 'snape@gmail.com',
        to: 'dullsleep0@gmail.com',
        subject: 'Project Completion Report - Operation Phoenix',
        body: `Dear Management,

I am writing to inform you that I have successfully completed the project Operation Phoenix. The project has been delivered on time and within budget.

I have successfully completed the project Operation Phoenix and have inferred the following data from our analysis:

1. System performance metrics show a 35% improvement in processing efficiency
2. Data integrity validation completed with 99.8% accuracy
3. Security protocols implemented and tested successfully
4. Documentation and training materials prepared for team handover

The project Operation Phoenix has met all objectives and deliverables. All stakeholders have been notified of the completion status.

I have inferred these data points from comprehensive testing and analysis conducted throughout the project lifecycle. The results demonstrate significant improvements in our operational capabilities.

Please let me know if you need any additional information or clarification regarding the project Operation Phoenix.

Best regards,
Snape`,
        timestamp: new Date(now - 2592000000).toISOString(), // ~1 month ago
        read: true,
        starred: false,
        archived: false,
        sent: true,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '62',
        from: 'lupin.black@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Hey! Project Update and Meeting Request',
        body: `Hey Snape,

How are you? I hope everything is going well on your end.

We have completed our project successfully! The team did an amazing job and everything is working as expected. I wanted to reach out and see if we can meet up soon to discuss the next steps.

There's an important piece of information I need to discuss with you about our next operation. It's quite urgent and I think it would be better to talk about it in person rather than over email.

Can we meet up this week? I'm free most afternoons. Let me know what works for you.

Also, regarding the next operation - there's an important alert you should be aware of: "T5U3". This is critical information that we need to address before moving forward.

Looking forward to hearing from you soon!

Take care,
Lupin`,
        timestamp: new Date(now - 1209600000).toISOString(), // ~2 weeks ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '63',
        from: 'careergrowth@solutions-network.com',
        to: 'snape@gmail.com',
        subject: '🎉 Congratulations on Your New Role!',
        body: `Dear User,
Congratulations!
Our records indicate that your professional profile has been marked as recently promoted.
To celebrate this achievement, you may be eligible for exclusive leadership tools and executive resources.
Click below to confirm your role update and unlock benefits.
Failure to confirm within 24 hours may result in role downgrade.
Best regards,
CareerGrowth Solutions`,
        timestamp: new Date(now - 10800000).toISOString(), // 3 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '64',
        from: 'notifications@professional-network.org',
        to: 'snape@gmail.com',
        subject: 'Someone Congratulated You on Your Promotion',
        body: `Hi,
A contact from your professional network has congratulated you on your recent role promotion.
To view the message and see who congratulated you, please sign in to your account.
Stay connected,
Professional Network Team`,
        timestamp: new Date(now - 14400000).toISOString(), // 4 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '65',
        from: 'finance@global-payroll-services.net',
        to: 'snape@gmail.com',
        subject: 'Role Promotion Bonus Pending — Action Required',
        body: `Dear Employee,
Congratulations on your promotion.
Due to your recent role upgrade, you qualify for a one-time bonus distribution.
However, your payment cannot be processed until role verification is completed.
Please review the attached form to avoid delays.
Finance Desk
Global Payroll Services`,
        timestamp: new Date(now - 18000000).toISOString(), // 5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '66',
        from: 'noreply@system-notification.service',
        to: 'snape@gmail.com',
        subject: 'Promotion Recorded Successfully',
        body: `Hello,
This automated message confirms that a promotion-related role update was detected.
No further action is required at this time.
Please do not reply to this message.
Thank you,
System Notification Service`,
        timestamp: new Date(now - 25200000).toISOString(), // 7 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '67',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Quarterly Team Meeting - All Hands Required',
        body: `Dear Team Members,

We are scheduling our quarterly all-hands meeting for next week. All team members are required to attend as we will be discussing important organizational updates and strategic initiatives.

The meeting will cover:
- Q4 performance review
- Upcoming project timelines
- Policy changes and compliance updates
- Open Q&A session

Please confirm your attendance by replying to this email.

Best regards,
DullSleep Executive Team`,
        timestamp: new Date(now - 94608000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '68',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Security Policy Update - Mandatory Review',
        body: `Dear Employees,

This is to inform you of an important update to our security policies. All employees are required to review the updated security guidelines by the end of this month.

Key changes include:
- Enhanced password requirements
- Updated data access protocols
- New reporting procedures for security incidents

Please review the attached document and acknowledge receipt.

Thank you,
DullSleep Security Department`,
        timestamp: new Date(now - 94752000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '69',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Annual Performance Review Schedule',
        body: `Hello Team,

The annual performance review cycle is now open. All employees are required to complete their self-assessments and schedule review meetings with their managers.

Review period: January - December
Deadline for submissions: End of next month

Please coordinate with your direct manager to schedule your review session.

Regards,
DullSleep HR Department`,
        timestamp: new Date(now - 94968000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '70',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Budget Approval for Q2 Projects',
        body: `Dear Team Leaders,

The budget for Q2 projects has been approved. All project managers should review the allocated resources and submit any adjustment requests by Friday.

Budget allocations have been distributed based on project priorities and resource availability.

If you have questions, please contact the finance department.

Best regards,
DullSleep Finance Team`,
        timestamp: new Date(now - 95184000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '71',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Training Program Registration Open',
        body: `Hello,

We are pleased to announce that registration for our professional development training programs is now open.

Available programs:
- Leadership Development
- Technical Skills Enhancement
- Communication Workshops
- Project Management Certification

Spaces are limited. Please register by the end of this week.

Thank you,
DullSleep Learning & Development`,
        timestamp: new Date(now - 95544000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '72',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'New Employee Onboarding - Welcome Session',
        body: `Dear Team,

We are hosting a welcome session for new employees joining our organization this month. All team members are invited to attend and meet the new colleagues.

The session will include:
- Introduction to company culture
- Overview of organizational structure
- Networking opportunities

Date and time will be shared in a follow-up email.

Best wishes,
DullSleep People Operations`,
        timestamp: new Date(now - 96480000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '73',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'System Maintenance - Planned Downtime',
        body: `Dear Users,

We will be performing scheduled system maintenance this weekend. During this time, certain services may be unavailable.

Maintenance window: Saturday 2 AM - 6 AM
Affected systems: Email, Document Management, Internal Portal

We apologize for any inconvenience this may cause.

DullSleep IT Operations`,
        timestamp: new Date(now - 97416000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '74',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Compliance Training Deadline Reminder',
        body: `Hello,

This is a reminder that the annual compliance training must be completed by all employees by the end of this quarter.

The training covers:
- Data protection regulations
- Workplace safety protocols
- Ethical conduct guidelines

Please complete the training modules in the learning portal.

Thank you,
DullSleep Compliance Office`,
        timestamp: new Date(now - 98352000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '75',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Team Building Event - Save the Date',
        body: `Dear Colleagues,

We are organizing a team building event next month. This is a great opportunity to connect with colleagues and strengthen team bonds.

Event details:
- Date: To be announced
- Location: Company retreat center
- Activities: Team challenges, networking, dinner

More information will follow. Please save the date.

Best regards,
DullSleep Events Committee`,
        timestamp: new Date(now - 99288000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '76',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Project Status Update - Monthly Report',
        body: `Hello Team,

Please find attached the monthly project status report. This report summarizes progress across all active projects and highlights any issues requiring attention.

Key highlights:
- 85% of projects on track
- 3 projects require additional resources
- 2 projects completed ahead of schedule

Please review and provide feedback if needed.

Regards,
DullSleep Project Management Office`,
        timestamp: new Date(now - 100224000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '77',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Benefits Enrollment Period Open',
        body: `Dear Employees,

The annual benefits enrollment period is now open. All employees must review and update their benefits selections by the deadline.

Available benefits:
- Health insurance options
- Retirement plans
- Flexible spending accounts
- Additional coverage options

Please log into the benefits portal to make your selections.

Best regards,
DullSleep Benefits Administration`,
        timestamp: new Date(now - 101160000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '78',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Office Relocation Notice',
        body: `Hello Team,

We are pleased to announce that our office will be relocating to a new facility next quarter. The new location offers improved amenities and better accessibility.

Relocation timeline:
- Planning phase: Current month
- Move date: Next quarter
- New address: To be announced

More details will be shared as planning progresses.

Thank you,
DullSleep Facilities Management`,
        timestamp: new Date(now - 102096000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '79',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Holiday Schedule - Upcoming Closures',
        body: `Dear Team,

Please be advised of the upcoming holiday schedule. The office will be closed on the following dates:

- New Year's Day
- Memorial Day
- Independence Day
- Labor Day
- Thanksgiving
- Christmas

Please plan your work schedules accordingly.

Best wishes,
DullSleep Administration`,
        timestamp: new Date(now - 103032000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '80',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Vendor Contract Renewal - Action Required',
        body: `Hello,

Several vendor contracts are up for renewal this quarter. Department heads are required to review and approve renewals for their respective vendors.

Please review the attached contract list and submit your approvals by the deadline.

If you have questions about specific contracts, contact procurement.

Regards,
DullSleep Procurement Department`,
        timestamp: new Date(now - 103968000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '81',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Internal Audit - Documentation Request',
        body: `Dear Team Members,

As part of our annual internal audit, we are requesting documentation for various processes and transactions.

Please prepare the following:
- Project documentation
- Expense reports
- Vendor invoices
- Compliance records

The audit team will contact you directly to schedule review sessions.

Thank you for your cooperation,
DullSleep Internal Audit`,
        timestamp: new Date(now - 104904000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '82',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Wellness Program - Health Screening Available',
        body: `Hello,

Our annual health screening program is now available. All employees are encouraged to participate in the free health screenings.

Screenings include:
- Blood pressure check
- Cholesterol testing
- BMI assessment
- General health consultation

Appointments can be scheduled through the HR portal.

Best regards,
DullSleep Wellness Program`,
        timestamp: new Date(now - 105840000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '83',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Software License Renewal - IT Notice',
        body: `Dear Users,

Several software licenses are due for renewal. IT department will be processing renewals for standard software packages.

If you require additional licenses or specialized software, please submit a request through the IT portal.

Renewal deadline: End of this month

Thank you,
DullSleep IT Department`,
        timestamp: new Date(now - 106776000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '84',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Client Feedback Survey - Please Participate',
        body: `Hello Team,

We are conducting a client feedback survey to improve our services. Your participation is valuable in helping us understand client satisfaction levels.

The survey takes approximately 10 minutes to complete. Please complete it by the end of this week.

Thank you for your time,
DullSleep Client Relations`,
        timestamp: new Date(now - 107712000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '85',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Emergency Contact Information Update',
        body: `Dear Employees,

Please ensure your emergency contact information is up to date in the employee portal. This information is critical for emergency situations.

To update:
1. Log into the employee portal
2. Navigate to Personal Information
3. Update emergency contacts

Please complete this by next week.

Thank you,
DullSleep HR Department`,
        timestamp: new Date(now - 108648000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '86',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'New Policy Implementation - Remote Work Guidelines',
        body: `Hello Team,

We are implementing new remote work guidelines effective next month. All employees should review the updated policy document.

Key changes:
- Updated work-from-home procedures
- Equipment and technology requirements
- Communication expectations
- Performance evaluation criteria

The full policy is available in the employee handbook.

Best regards,
DullSleep Policy Committee`,
        timestamp: new Date(now - 109584000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '87',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Quarterly Newsletter - Company Updates',
        body: `Dear Team,

Please find attached our quarterly newsletter with updates on company news, achievements, and upcoming events.

Highlights include:
- New client acquisitions
- Team achievements and recognition
- Upcoming company events
- Industry news and insights

We hope you enjoy reading it.

Best wishes,
DullSleep Communications Team`,
        timestamp: new Date(now - 110520000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '88',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Expense Report Submission Deadline',
        body: `Hello,

This is a reminder that all expense reports for the previous quarter must be submitted by the end of this week.

Please ensure:
- All receipts are attached
- Expenses are properly categorized
- Approval signatures are included

Late submissions may delay reimbursement.

Thank you,
DullSleep Finance Department`,
        timestamp: new Date(now - 111456000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '89',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Mentorship Program - Applications Open',
        body: `Dear Team,

We are launching a new mentorship program to support professional development. Both mentors and mentees are encouraged to apply.

Program benefits:
- Career guidance and support
- Skill development opportunities
- Networking and relationship building
- Professional growth

Applications are due by the end of this month.

Best regards,
DullSleep Talent Development`,
        timestamp: new Date(now - 112392000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '90',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Data Backup Verification Required',
        body: `Hello,

As part of our data protection procedures, we need to verify that all critical data is being properly backed up.

Please confirm:
- Your data backup procedures are current
- Backup schedules are being followed
- Recovery procedures are documented

IT will follow up with each department to verify compliance.

Thank you,
DullSleep IT Security`,
        timestamp: new Date(now - 113328000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '91',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Company Picnic - Family Event',
        body: `Dear Employees and Families,

We are excited to invite you to our annual company picnic! This is a family-friendly event with food, games, and activities for all ages.

Event details:
- Date: To be announced
- Location: City Park
- Activities: Games, food, music, prizes

More information will be shared soon. We hope to see you there!

Best regards,
DullSleep Events Team`,
        timestamp: new Date(now - 114264000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '92',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Time Off Request - Policy Reminder',
        body: `Hello,

This is a reminder about our time off request policy. All time off requests must be submitted at least two weeks in advance.

Please note:
- Peak periods may have limited availability
- Requests are subject to manager approval
- Unused time off does not roll over

Please submit requests through the HR portal.

Thank you,
DullSleep HR Department`,
        timestamp: new Date(now - 115200000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '93',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Equipment Return - End of Lease',
        body: `Dear Team,

Several equipment leases are ending this quarter. Please return all leased equipment to the IT department by the specified dates.

Equipment to return:
- Laptops (if applicable)
- Mobile devices
- Other leased equipment

IT will contact you directly with return instructions.

Thank you,
DullSleep IT Asset Management`,
        timestamp: new Date(now - 116136000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '94',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Innovation Award - Nomination Period Open',
        body: `Hello Team,

We are accepting nominations for the annual Innovation Award. This award recognizes employees who have made significant contributions through innovative ideas and solutions.

Nomination criteria:
- Innovative problem-solving
- Positive impact on operations
- Creativity and originality

Please submit nominations by the deadline.

Best regards,
DullSleep Innovation Committee`,
        timestamp: new Date(now - 117072000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '95',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Supplier Evaluation - Feedback Requested',
        body: `Dear Team,

We are conducting an evaluation of our current suppliers. Your feedback on supplier performance is valuable.

Please provide feedback on:
- Quality of products/services
- Delivery timeliness
- Communication and support
- Overall satisfaction

Survey link will be sent separately.

Thank you,
DullSleep Procurement`,
        timestamp: new Date(now - 118008000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '96',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Workplace Safety Training - Mandatory',
        body: `Hello,

All employees are required to complete the annual workplace safety training. This training is mandatory and must be completed by the end of this month.

Training topics:
- Emergency procedures
- Hazard identification
- Safety equipment usage
- Incident reporting

Please access the training through the learning portal.

Thank you,
DullSleep Safety Office`,
        timestamp: new Date(now - 118944000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '97',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Client Appreciation Event - Invitation',
        body: `Dear Team,

We are hosting a client appreciation event next month. All client-facing team members are invited to attend.

The event will include:
- Networking opportunities
- Client presentations
- Dinner and entertainment

Please RSVP by the deadline.

Best regards,
DullSleep Business Development`,
        timestamp: new Date(now - 119880000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '98',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Document Retention Policy - Compliance Reminder',
        body: `Hello,

This is a reminder about our document retention policy. All departments must ensure compliance with document retention schedules.

Key requirements:
- Financial records: 7 years
- Employee records: 5 years
- Project documentation: 3 years
- General correspondence: 2 years

Please review your document retention practices.

Thank you,
DullSleep Records Management`,
        timestamp: new Date(now - 120816000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '99',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Employee Recognition Program - Nominate Now',
        body: `Dear Team,

Our employee recognition program is accepting nominations for outstanding performance. Help us recognize colleagues who have gone above and beyond.

Categories:
- Excellence in Service
- Innovation and Creativity
- Team Collaboration
- Leadership Excellence

Submit nominations through the recognition portal.

Best regards,
DullSleep Recognition Committee`,
        timestamp: new Date(now - 121752000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '100',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Quarterly Business Review - Preparation',
        body: `Hello Team Leaders,

The quarterly business review meeting is scheduled for next month. Please prepare your department reports covering:

- Key achievements
- Challenges and solutions
- Resource requirements
- Upcoming priorities

Report templates will be sent separately.

Thank you,
DullSleep Executive Office`,
        timestamp: new Date(now - 122688000000).toISOString(), // ~3 years ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '101',
        from: 'urgent-payment@claim-your-money-now.com',
        to: 'snape@gmail.com',
        subject: '💰 URGENT: Claim Your $5,000 Payment Now!',
        body: `Dear Valued Customer,

You have an unclaimed payment of $5,000 waiting for you!

This payment is from a class-action lawsuit settlement. To claim your money, please provide:
- Your Social Security Number
- Bank account details
- Date of birth

Click here to claim: http://claim-your-money-now.com/claim

This offer expires in 48 hours. Don't miss out!

Best regards,
Payment Processing Center`,
        timestamp: new Date(now - 3600000).toISOString(), // 1 hour ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '102',
        from: 'noreply@social-media-verification.net',
        to: 'snape@gmail.com',
        subject: 'Your Social Media Account Needs Verification',
        body: `Hello,

We detected suspicious activity on your social media account. For your security, please verify your account immediately.

Click here to verify: http://social-media-verification.net/verify

If you don't verify within 24 hours, your account will be permanently deleted.

Security Team
Social Media Platform`,
        timestamp: new Date(now - 5400000).toISOString(), // 1.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '103',
        from: 'investment@crypto-millionaire-scheme.org',
        to: 'snape@gmail.com',
        subject: '🚀 Make $10,000 in 24 Hours with Cryptocurrency!',
        body: `Hello Friend,

Want to become a millionaire? Our proven cryptocurrency investment strategy can make you $10,000 in just 24 hours!

No experience needed! Just invest $500 and watch it grow!

Join thousands of successful investors who are making money right now!

Sign up now: http://crypto-millionaire-scheme.org/join

Limited spots available!

Investment Team`,
        timestamp: new Date(now - 9000000).toISOString(), // 2.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '104',
        from: 'support@netflix-account-suspended.com',
        to: 'snape@gmail.com',
        subject: 'Netflix Account Suspended - Reactivate Now',
        body: `Dear Netflix User,

Your Netflix account has been suspended due to payment issues.

To reactivate your account, please update your payment information:
http://netflix-account-suspended.com/reactivate

If you don't update within 48 hours, your account will be permanently closed.

Netflix Support Team`,
        timestamp: new Date(now - 12600000).toISOString(), // 3.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '105',
        from: 'dating@find-your-soulmate-today.ru',
        to: 'snape@gmail.com',
        subject: '🔥 Hot Singles in Your Area Want to Meet!',
        body: `Hello,

Are you looking for love? Join our exclusive dating site and meet thousands of attractive singles in your area!

- Free registration
- Verified profiles
- Instant messaging
- Success guaranteed!

Sign up now: http://find-your-soulmate-today.ru/register

Don't be alone anymore!

Dating Site Team`,
        timestamp: new Date(now - 16200000).toISOString(), // 4.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '106',
        from: 'credit-repair@fix-your-credit-fast.net',
        to: 'snape@gmail.com',
        subject: 'Fix Your Credit Score in 30 Days - Guaranteed!',
        body: `Dear Consumer,

Is your credit score holding you back? We can fix it in just 30 days!

Our proven method has helped thousands improve their credit scores by 100+ points.

Special offer: Only $99 for the first month!

Sign up now: http://fix-your-credit-fast.net/offer

Money-back guarantee!

Credit Repair Experts`,
        timestamp: new Date(now - 19800000).toISOString(), // 5.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '107',
        from: 'weight-loss@miracle-pills-online.com',
        to: 'snape@gmail.com',
        subject: 'Lose 30 Pounds in 30 Days - No Diet, No Exercise!',
        body: `Hello,

Tired of diets that don't work? Try our miracle weight loss pills!

- Lose 30 pounds in 30 days
- No dieting required
- No exercise needed
- 100% natural ingredients
- Money-back guarantee

Order now: http://miracle-pills-online.com/buy

Limited time offer - 50% off!

Weight Loss Solutions`,
        timestamp: new Date(now - 23400000).toISOString(), // 6.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '108',
        from: 'tech-support@windows-virus-alert.com',
        to: 'snape@gmail.com',
        subject: '⚠️ VIRUS DETECTED on Your Computer!',
        body: `URGENT ALERT!

We have detected a dangerous virus on your computer. Immediate action is required!

Your computer is at risk of:
- Data loss
- Identity theft
- System crash

Click here to remove the virus now:
http://windows-virus-alert.com/remove-virus

Do not ignore this warning!

Windows Security Team`,
        timestamp: new Date(now - 27000000).toISOString(), // 7.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '109',
        from: 'inheritance@unclaimed-funds-international.org',
        to: 'snape@gmail.com',
        subject: 'You Have Unclaimed Inheritance Money!',
        body: `Dear Sir/Madam,

We have been trying to contact you regarding unclaimed inheritance funds in your name.

Amount: $2,500,000 USD

To claim your inheritance, please provide:
- Full name and address
- Bank account information
- Proof of identity

Reply immediately to claim your funds.

Legal Department
International Inheritance Services`,
        timestamp: new Date(now - 30600000).toISOString(), // 8.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '110',
        from: 'subscription@premium-membership-offer.com',
        to: 'snape@gmail.com',
        subject: 'Exclusive Premium Membership - 90% OFF!',
        body: `Hello,

You've been selected for an exclusive premium membership offer!

Get access to:
- Exclusive content
- Premium features
- VIP support
- Special discounts

Regular price: $299/month
Your price: $29/month (90% OFF!)

This offer expires in 24 hours!

Click here: http://premium-membership-offer.com/join

Membership Services`,
        timestamp: new Date(now - 34200000).toISOString(), // 9.5 hours ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: true,
        trash: false,
        snoozed: false,
        important: false
      }
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEmails))
  }
}

// Get all emails
export const getEmails = () => {
  initializeSampleEmails()
  const emails = localStorage.getItem(STORAGE_KEY)
  const emailList = emails ? JSON.parse(emails) : []
  
  // Ensure the sent email about Documentation Synchronization always exists
  const sentEmailId = '55'
  const sentEmailExists = emailList.find(e => e.id === sentEmailId)
  if (!sentEmailExists) {
    const sentEmail = {
      id: '55',
      from: 'snape@gmail.com',
      to: 'dullsleep0@gmail.com',
      subject: 'Re: Documentation Synchronization and Restricted Initiative Review',
      body: `Dear DullSleep Information Governance Office,

<p>
  This message is in reference to the recent correspondence regarding the
  synchronization and controlled handling of documentation associated with
  an internal initiative currently undergoing restricted review.
</p>

<p>
  As per the outlined governance procedures, all relevant materials have been
  prepared in accordance with established information classification
  standards. The documentation has been segmented appropriately to ensure
  continuity while preventing unintended visibility across internal
  platforms.
</p>

<p>
  Access permissions have been aligned strictly with the assigned stewardship
  role, and no additional identifiers, aliases, or reference tags have been
  introduced beyond those already defined in the initial preparation phase.
  This is to avoid discrepancies during archival validation and future
  audits.
</p>

<p>
  We request confirmation that the restricted visibility settings have been
  successfully enforced and that no automated indexing or cross-departmental
  linkage is currently active for this initiative.
</p>

<!-- QmxhY2sgVmVpbA== -->

<p>
  Until further notice, all handling of the above-mentioned materials should
  continue to follow concealment and phased disclosure guidelines as
  prescribed by the governance framework.
</p>

<p>
  Kindly acknowledge receipt of this communication and advise once the
  segregation and verification steps are complete.
</p>

<p>
  Regards,<br>
  <em>A Concerned Contributor</em>
</p>`,
      timestamp: new Date('2026-01-22T12:30:00').toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: true,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    }
    emailList.push(sentEmail)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emailList))
  }
  
  // Ensure the 3 routine governance sent emails always exist
  const routineEmailIds = ['56', '57', '58']
  routineEmailIds.forEach((emailId, index) => {
    const emailExists = emailList.find(e => e.id === emailId)
    if (!emailExists) {
      const subjects = [
        'Routine Governance Communication',
        'Project Oversight Continuity Notice',
        'No Changes to Current Project Controls'
      ]
      const bodies = [
        `Dear Governance Office,
This message is intended as a routine governance communication regarding internal project oversight responsibilities.
At present, all applicable procedures are being followed, and no deviations have been identified that require intervention.
This communication is informational in nature.
Respectfully,
Mr. Snape
DullSleep`,
        `Dear Colleagues,
I would like to reaffirm that continuity measures associated with the internal project remain in place and effective.
All relevant stakeholders have been operating within the prescribed governance boundaries, and no compliance issues have been reported.
Thank you for your cooperation.
Regards,
Mr. Snape
DullSleep`,
        `Dear Information Governance Office,
This communication confirms that there have been no changes to the control mechanisms governing the internal project at this time.
Existing access restrictions and documentation practices remain sufficient and should be maintained until further notice.
No response is necessary.
Sincerely,
Mr. Snape
DullSleep`
      ]
      const timestamps = [
        new Date('2026-01-27T13:10:00').toISOString(), // 1:10 PM, 27/1/2026
        new Date('2026-01-27T13:11:00').toISOString(), // 1:11 PM, 27/1/2026
        new Date('2026-01-27T13:11:30').toISOString()  // 1:11 PM, 27/1/2026
      ]
      
      const routineEmail = {
        id: emailId,
        from: 'snape@gmail.com',
        to: 'dullsleep0@gmail.com',
        subject: subjects[index],
        body: bodies[index],
        timestamp: timestamps[index],
        read: true,
        starred: false,
        archived: false,
        sent: true,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      }
      emailList.push(routineEmail)
    }
  })
  
  if (routineEmailIds.some(id => !emailList.find(e => e.id === id))) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emailList))
  }
  
  // Ensure the 5 additional governance sent emails always exist
  const additionalEmailIds = ['59', '60', '61', '62', '63']
  additionalEmailIds.forEach((emailId, index) => {
    const emailExists = emailList.find(e => e.id === emailId)
    if (!emailExists) {
      const subjects = [
        'Project Documentation Status Update',
        'Confirmation of Restricted Access Enforcement',
        'Project Review Cycle — No Action Required',
        'Internal Project Handling Clarification',
        'Documentation Integrity Acknowledgement'
      ]
      const bodies = [
        `Dear Information Governance Office,
I am writing to provide a routine update regarding the documentation status of the internal project currently under review.
All materials remain aligned with existing governance standards, and no deviations have been observed during the most recent verification cycle. Access controls continue to function as intended.
No further action is required at this time.
Regards,
Mr. Snape
DullSleep`,
        `Dear Team,
This message serves to confirm that restricted access policies associated with the ongoing project have been reviewed and reaffirmed.
The current configuration ensures compliance with internal guidelines, and no unauthorized visibility has been detected across monitored platforms.
Please advise if additional confirmation is required.
Sincerely,
Mr. Snape
DullSleep`,
        `Dear Governance Office,
As part of the scheduled review cycle, I have completed a preliminary assessment of the project-related records currently retained within controlled storage.
At this stage, no corrective measures or adjustments are necessary. The existing segmentation remains sufficient for present operational needs.
Further updates will be communicated if circumstances change.
Regards,
Mr. Snape
DullSleep`,
        `Dear Colleagues,
I wish to clarify that recent discussions regarding internal project handling do not imply any immediate changes to classification or retention policies.
All materials should continue to be managed under the previously established framework until formally notified otherwise.
Thank you for maintaining consistency during this period.
Regards,
Mr. Snape
DullSleep`,
        `Dear Information Governance Office,
This note acknowledges the continued integrity of project documentation currently maintained under restricted oversight.
Periodic validation checks indicate no anomalies or inconsistencies that would warrant escalation or reclassification.
Please retain this communication for record purposes only.
Sincerely,
Mr. Snape
DullSleep`
      ]
      const timestamps = [
        new Date('2026-01-27T13:12:00').toISOString(), // 1:12 PM, 27/1/2026
        new Date('2026-01-27T13:13:00').toISOString(), // 1:13 PM, 27/1/2026
        new Date('2026-01-27T13:14:00').toISOString(), // 1:14 PM, 27/1/2026
        new Date('2026-01-27T13:15:00').toISOString(), // 1:15 PM, 27/1/2026
        new Date('2026-01-27T13:16:00').toISOString()  // 1:16 PM, 27/1/2026
      ]
      
      const additionalEmail = {
        id: emailId,
        from: 'snape@gmail.com',
        to: 'dullsleep0@gmail.com',
        subject: subjects[index],
        body: bodies[index],
        timestamp: timestamps[index],
        read: true,
        starred: false,
        archived: false,
        sent: true,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      }
      emailList.push(additionalEmail)
    }
  })
  
  if (additionalEmailIds.some(id => !emailList.find(e => e.id === id))) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emailList))
  }
  
  return emailList
}

// Save an email (create or update)
export const saveEmail = (email) => {
  const emails = getEmails()
  const existingIndex = emails.findIndex(e => e.id === email.id)
  
  if (existingIndex >= 0) {
    emails[existingIndex] = email
  } else {
    emails.push(email)
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  return email
}

// Delete an email
export const deleteEmail = (emailId) => {
  const emails = getEmails()
  const filtered = emails.filter(e => e.id !== emailId)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

// Archive an email
export const archiveEmail = (emailId) => {
  const emails = getEmails()
  const email = emails.find(e => e.id === emailId)
  if (email) {
    email.archived = !email.archived
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  }
}

// Mark email as read
export const markAsRead = (emailId) => {
  const emails = getEmails()
  const email = emails.find(e => e.id === emailId)
  if (email) {
    email.read = true
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  }
}

// Star/unstar an email
export const toggleStar = (emailId) => {
  const emails = getEmails()
  const email = emails.find(e => e.id === emailId)
  if (email) {
    email.starred = !email.starred
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  }
}

// Populate inbox with sample emails (can be called to refresh/repopulate)
export const populateInbox = () => {
  const now = Date.now()
  const sampleEmails = [
    {
      id: '1',
      from: 'jordanmichaels@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Welcome to Project Atlas 🚀',
      body: generateLongEmailContent('project'),
      timestamp: new Date(now - 94608000000).toISOString(),
      read: false,
      starred: true,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '2',
      from: 'maria_chen@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Q1 Campaign Feedback and Strategic Recommendations',
      body: generateLongEmailContent('business'),
      timestamp: new Date(now - 94752000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '3',
      from: 'support-service@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Ticket #4521 Resolved - Detailed Resolution Report',
      body: generateLongEmailContent('support'),
      timestamp: new Date(now - 94968000000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '4',
      from: 'adiaz@university.edu',
      to: 'snape@gmail.com',
      subject: 'Office Hours Update and Course Information',
      body: generateLongEmailContent('meeting'),
      timestamp: new Date(now - 95184000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '5',
      from: 'chrisanderson@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Top Stories This Week: AI Breakthrough & Clean Tech Rising',
      body: generateLongEmailContent('newsletter'),
      timestamp: new Date(now - 95544000000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '6',
      from: 'bethanyj@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Important: Margin Alert Threshold Notification',
      body: generateLongEmailContent('business'),
      timestamp: new Date(now - 96480000000).toISOString(),
      read: false,
      starred: true,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '7',
      from: 'no-reply@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Scheduled Maintenance Tonight (1–3 AM UTC) - Details Inside',
      body: generateLongEmailContent('support'),
      timestamp: new Date(now - 97416000000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '8',
      from: 'jennag@healthyplate.co',
      to: 'snape@gmail.com',
      subject: 'Your Order #67829 Shipped 📦 - Tracking Information',
      body: generateLongEmailContent('support'),
      timestamp: new Date(now - 98352000000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '9',
      from: 'ryanpatel@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Introduction: Our New Payment API v2.0',
      body: generateLongEmailContent('project'),
      timestamp: new Date(now - 99288000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '10',
      from: 'grace_liu@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Revisions for Banner Designs - Multiple Options',
      body: generateLongEmailContent('business'),
      timestamp: new Date(now - 100224000000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '11',
      from: 'events@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Contract & Final Headcount Confirmed',
      body: generateLongEmailContent('meeting'),
      timestamp: new Date(now - 101160000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '12',
      from: 'hr@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Time-Off Policy Update - Important Changes',
      body: generateLongEmailContent('business'),
      timestamp: new Date(now - 102096000000).toISOString(),
      read: true,
      starred: true,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '13',
      from: 'no-reply@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Your Booking Flight UA502 Confirmed',
      body: generateLongEmailContent('support'),
      timestamp: new Date(now - 103032000000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '14',
      from: 'radams@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Engagement Photoshoot Ideas and Planning',
      body: generateLongEmailContent('personal'),
      timestamp: new Date(now - 103968000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '15',
      from: 'security@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Security Alert: New Sign-In from Unknown Device',
      body: generateLongEmailContent('support'),
      timestamp: new Date(now - 104904000000).toISOString(),
      read: true,
      starred: true,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '16',
      from: 'danielkim@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Contract Draft for Review - Legal Documentation',
      body: generateLongEmailContent('business'),
      timestamp: new Date(now - 1036800000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '17',
      from: 'momdad@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Reunion Plans - Family Gathering Discussion',
      body: generateLongEmailContent('personal'),
      timestamp: new Date(now - 1123200000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '18',
      from: 'updates@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Wrapped 2025 Is Here! Your Year in Music',
      body: generateLongEmailContent('newsletter'),
      timestamp: new Date(now - 1209600000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '19',
      from: 'osparks@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Next Read: "The Midnight Library" Discussion',
      body: generateLongEmailContent('personal'),
      timestamp: new Date(now - 1296000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '20',
      from: 'digest@gmail.com',
      to: 'snape@gmail.com',
      subject: '5 New Gadgets That Could Change Your Home',
      body: generateLongEmailContent('newsletter'),
      timestamp: new Date(now - 1382400000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '21',
      from: 'team@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Product Launch Update - Exciting New Features',
      body: generateLongEmailContent('project'),
      timestamp: new Date(now - 1468800000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '22',
      from: 'conference@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Tech Summit 2025 - Early Bird Registration Open',
      body: generateLongEmailContent('newsletter'),
      timestamp: new Date(now - 1555200000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '23',
      from: 'mentor@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Career Development Discussion - Next Steps',
      body: generateLongEmailContent('personal'),
      timestamp: new Date(now - 1641600000).toISOString(),
      read: false,
      starred: true,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '24',
      from: 'investor@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Investment Opportunity - Series A Funding',
      body: generateLongEmailContent('business'),
      timestamp: new Date(now - 1728000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '25',
      from: 'rachelgreen@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Alumni Network Event - Save the Date',
      body: generateLongEmailContent('meeting'),
      timestamp: new Date(now - 1814400000).toISOString(),
      read: true,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '26',
      from: 'system-alert@gmail.com',
      to: 'snape@gmail.com',
      subject: '⏰ Final Reminder: Confirm Your Participation Today',
      body: `Hello,

This is a reminder to confirm your participation in the upcoming event.

Due to venue and access constraints, unconfirmed registrations may be released.

Please review your registration details and confirm at the earliest.

Regards,
Event Coordination Team`,
      timestamp: new Date(now - 115200000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '27',
      from: 'automated-notice@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Action Required: Access Suspension Scheduled (Ref: 9F-27)',
      body: `Hello,

This message is being sent as part of a scheduled access integrity review affecting a limited number of accounts. Our records indicate that your account was flagged during a routine synchronization check conducted earlier today.

The flag does not necessarily indicate a security breach. In most cases, this occurs when account activity cannot be fully verified against recent session metadata, including device identifiers, network changes, or incomplete profile validation.

To prevent unintended service interruption, accounts marked under this review are granted a temporary grace period before automated restrictions are applied. During this period, users are advised to review their access status and confirm ownership to ensure continuity.

Please note that failure to complete verification within the allocated review window may result in limited access to associated services until the next audit cycle. This restriction is automatically enforced and cannot be manually overridden once applied.

If you have recently accessed your account from a new location, used a different browser configuration, or interacted with shared resources, this notice may safely be disregarded after verification.

For audit tracking purposes, reference ID 9F-27 has been assigned to this review. We recommend retaining this ID for future correspondence.

Thank you for your prompt attention to this matter.

Access Review Team
Automated Compliance Notification

This message was generated as part of an automated review process. Please do not reply directly to this email.`,
      timestamp: new Date(now - 94608000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '28',
      from: 'davidrodriguez@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Internal Notification: Pending Review Item Requires Attention',
      body: `Hello,

This message is being issued as a follow-up to a pending review item associated with your address that remains unacknowledged in the current review cycle. The notification is being redistributed to ensure visibility before the review window advances to the next phase.

The item in question originated during a routine alignment process intended to standardize documentation references across multiple systems. While the update itself does not introduce new requirements, acknowledgment is required to confirm receipt and awareness for audit logging purposes.

In previous cycles, similar items that were not acknowledged within the review window were automatically escalated by the system. Escalation does not imply a violation; however, it may result in temporary limitations being applied until confirmation is recorded. These limitations are applied automatically and are removed once acknowledgment is completed.

Please note that this message is informational in nature. No immediate corrective action is required unless otherwise indicated during review. If you believe this notification was received in error or does not pertain to your role, it may be safely reviewed and disregarded after acknowledgment.

This notice has been generated by an automated review workflow. Replies to this message are not monitored.

— Documentation & Review
Internal Distribution System`,
      timestamp: new Date(now - 117072000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '29',
      from: 'security-check@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Notice of Record Alignment – Review Window Active',
      body: `Dear Recipient,

As part of an ongoing record alignment initiative, certain entries associated with your contact information have been identified as pending verification. This initiative is conducted periodically to ensure consistency between operational records, audit logs, and access registries.

During this review window, records that remain in an unverified state may be temporarily classified as inactive for alignment purposes. This classification does not affect stored data; however, it may limit access to services or notifications that rely on verified records for delivery and authorization.

The alignment process follows a predefined schedule and advances automatically once the review window closes. After advancement, records cannot be reclassified until the next scheduled cycle, regardless of subsequent updates.

If you have recently reviewed or updated your information, this notice may be disregarded after confirmation. If no action is taken, the system will proceed according to standard alignment rules.

This communication is intended to provide advance notice only and does not constitute a violation or enforcement action.

Compliance Notification System
Automated Record Alignment`,
      timestamp: new Date(now - 94752000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '30',
      from: 'jameswilson@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Automated Service Integrity Review – Non-Disruptive Action Window Open',
      body: `Hello,

This notification is being generated as part of an automated service integrity review designed to ensure consistent access behavior across distributed systems. During this cycle, a subset of active accounts was selected for secondary verification due to recent synchronization events recorded across multiple service layers.

Selection for review does not indicate abnormal usage or policy violations. In most cases, it is triggered by expected activity patterns such as session persistence across devices, network topology changes, or delayed state propagation between services. These patterns are evaluated periodically to reduce false positives during anomaly detection.

To maintain uninterrupted service availability, accounts included in this review are temporarily placed in a monitored state until verification is recorded or the review window expires. Accounts that remain in this state beyond the current window may experience limited access to certain non-critical features until the next evaluation cycle completes.

This process is fully automated and operates independently of manual intervention. No direct response is required if verification has already occurred through normal usage patterns.

Reference information related to this review has been logged for audit continuity and may be referenced in subsequent system-generated notifications.

Service Integrity Automation
Monitoring & Reliability Systems`,
      timestamp: new Date(now - 118944000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '31',
      from: 'important-update@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Notification: Background Credential Validation in Progress',
      body: `Dear User,

As part of scheduled maintenance operations, background credential validation is currently being performed to ensure alignment between authentication services and downstream access controls. This validation occurs routinely and is intended to identify expired, incomplete, or desynchronized credential states.

During validation, credentials that cannot be fully reconciled against recent access metadata may be temporarily marked as pending. This status does not prevent access immediately but may delay authorization for newly initiated sessions until validation completes.

The validation process relies on passive confirmation signals generated during normal usage. In most cases, no direct interaction is required. However, credentials that remain pending after the validation window closes may be queued for additional review during the next cycle.

This notice is being provided to ensure awareness and to reduce confusion should any transient access inconsistencies be observed. Once validation completes, all pending states are automatically cleared.

No response to this message is monitored.

Authentication Services
Automated Maintenance Workflow`,
      timestamp: new Date(now - 94968000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '32',
      from: 'robert_taylor@gmail.com',
      to: 'snape@gmail.com',
      subject: 'System Advisory: Configuration Drift Detected (Low Severity)',
      body: `Hello,

A low-severity configuration drift has been detected during a routine comparison between expected system parameters and current runtime states associated with your account context. Configuration drift commonly occurs as a result of incremental updates, deferred policy propagation, or legacy settings persisting beyond scheduled refresh intervals.

At this time, the detected drift does not present an operational risk and does not require immediate remediation. However, accounts associated with unresolved drift may experience reduced compatibility with newly deployed features or updates until alignment is restored.

Alignment is typically achieved automatically through standard system interactions. In cases where alignment cannot be confirmed, the system may defer certain optional operations to maintain stability across dependent services.

This advisory is informational and is intended to provide context should you observe minor changes in system behavior. Further notifications will only be issued if manual review becomes necessary.

Configuration Management
Systems Reliability Group`,
      timestamp: new Date(now - 120816000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '33',
      from: 'jenniferbrown@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Queued Notice: Session Metadata Reconciliation Pending',
      body: `Hi,

This message serves as a queued notice related to session metadata reconciliation currently pending for your account. Session reconciliation is a background process that ensures consistency between authentication records, session lifecycles, and associated authorization tokens.

Reconciliation may be initiated when session activity spans multiple environments, experiences delayed termination events, or is affected by intermittent connectivity. These conditions are routinely observed and are handled automatically without user intervention in the majority of cases.

While reconciliation is pending, newly initiated sessions may be subject to additional validation steps. These steps are non-disruptive and are designed to prevent propagation of inconsistent state across services.

If reconciliation completes successfully, no further communication will be issued. If additional confirmation is required, follow-up notices will be generated automatically by the system.

Session Management Services
Automated State Processing`,
      timestamp: new Date(now - 95184000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '34',
      from: 'williamdavis@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Operational Notice: Deferred Update Applied to Account Context',
      body: `Dear Recipient,

A deferred operational update has recently been applied to your account context as part of a phased rollout intended to minimize service disruption. Deferred updates are used to align account configurations with updated system baselines while maintaining compatibility with existing workflows.

During the deferral period, certain features may operate under transitional parameters. This does not affect data integrity or stored content; however, some changes may not become visible until full alignment is completed during a subsequent maintenance window.

Accounts that remain in a deferred state beyond the current rollout phase may be subject to additional checks to ensure that baseline requirements are met. These checks are performed automatically and do not require user initiation.

This notice is provided for transparency and to reduce confusion should you encounter minor inconsistencies during the transition period.

Operations & Deployment
Automated Rollout Systems`,
      timestamp: new Date(now - 122688000000).toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '35',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Congratulations on Your Promotion',
      body: `Dear Colleagues,
We are pleased to announce that recent internal role realignments have been successfully completed.
Several team members have transitioned into updated responsibilities following the latest governance review cycle.
Please join us in congratulating all individuals who have accepted their new roles and continue to demonstrate professionalism and adaptability in evolving operational environments.
Further clarification on role-specific access privileges will be shared through departmental briefings where applicable.
Thank you for your continued cooperation and commitment.
Regards,
DullSleep Human Capital Operations`,
      timestamp: new Date(now - 86400000).toISOString(), // 1 day ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '36',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Promotion Acknowledgement & Role Confirmation',
      body: `Dear Team,
Congratulations to those who have recently been promoted or reassigned under the revised organizational structure.
As a reminder, promotion does not automatically imply expanded access unless explicitly stated within the role documentation. All promoted individuals are expected to adhere strictly to updated compliance and information stewardship guidelines.
Any questions regarding scope or responsibility should be directed through appropriate managerial channels.
Sincerely,
DullSleep Compliance & Oversight Unit`,
      timestamp: new Date(now - 518400000).toISOString(), // 6 days ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '37',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Role Transition — Congratulations',
      body: `Dear Team,
We extend our congratulations to the personnel who have successfully transitioned into elevated roles this quarter.
These appointments reflect trust, accountability, and alignment with DullSleep's long-term information governance strategy. Role details may vary depending on operational needs and should not be inferred beyond official communications.
Thank you for respecting confidentiality during this transition period.
Regards,
DullSleep Administrative Council`,
      timestamp: new Date(now - 1209600000).toISOString(), // 14 days ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '38',
        from: 'dullsleep0@gmail.com',
        to: 'snape@gmail.com',
        subject: 'Congratulations — Role Update Processed',
        body: `Dear Team Member,
Your promotion acknowledgment has been logged successfully within the internal registry.
Please be advised that system visibility of your updated role may vary across platforms due to synchronization cycles. No action is required unless otherwise notified.
Congratulations, and thank you for your continued service.
— Automated Notice
DullSleep Internal Systems`,
        timestamp: new Date(now - 31536000000).toISOString(), // ~1 year ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
      id: '39',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Formal Congratulations on Role Advancement',
      body: `Dear All,
This message serves to formally recognize recent promotions across several divisions.
Promoted roles carry with them heightened responsibility, discretion, and adherence to internal standards.
Please note that documentation updates may lag behind operational enforcement.
Congratulations once again to those entrusted with these roles.
Warm regards,
DullSleep Organizational Development Office`,
      timestamp: new Date(now - 15768000000).toISOString(), // ~6 months ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '60',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
        subject: 'Formal Promotion Notice',
        body: `Dear Team,

This is to formally inform you that, effective immediately, Mr. Snape has been elevated to the role of Senior Information Steward within the DullSleep organization.

In this capacity, he will be responsible for overseeing the integrity, continuity, and controlled dissemination of sensitive organizational information across all internal platforms.

Please note that:
* Access policies may be revised without prior notice.
* Certain records may be archived, segmented, or restricted in alignment with governance standards.
* All departments are expected to comply with stewardship directives.

This appointment reflects continued confidence in his discretion, consistency, and commitment to safeguarding critical knowledge.

Further details, where applicable, will be communicated through official channels.

Regards,
DullSleep Information Governance Office`,
        timestamp: new Date(now - 7776000000).toISOString(), // ~3 months ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '61',
      from: 'snape@gmail.com',
      to: 'dullsleep0@gmail.com',
      subject: 'Project Completion Report - Operation Phoenix',
      body: `Dear Management,

I am writing to inform you that I have successfully completed the project Operation Phoenix. The project has been delivered on time and within budget.

I have successfully completed the project Operation Phoenix and have inferred the following data from our analysis:

1. System performance metrics show a 35% improvement in processing efficiency
2. Data integrity validation completed with 99.8% accuracy
3. Security protocols implemented and tested successfully
4. Documentation and training materials prepared for team handover

The project Operation Phoenix has met all objectives and deliverables. All stakeholders have been notified of the completion status.

I have inferred these data points from comprehensive testing and analysis conducted throughout the project lifecycle. The results demonstrate significant improvements in our operational capabilities.

Please let me know if you need any additional information or clarification regarding the project Operation Phoenix.

Best regards,
Snape`,
      timestamp: new Date(now - 2592000000).toISOString(), // ~1 month ago
      read: true,
      starred: false,
      archived: false,
      sent: true,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '62',
      from: 'lupin.black@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Hey! Project Update and Meeting Request',
      body: `Hey Snape,

How are you? I hope everything is going well on your end.

We have completed our project successfully! The team did an amazing job and everything is working as expected. I wanted to reach out and see if we can meet up soon to discuss the next steps.

There's an important piece of information I need to discuss with you about our next operation. It's quite urgent and I think it would be better to talk about it in person rather than over email.

Can we meet up this week? I'm free most afternoons. Let me know what works for you.

Also, regarding the next operation - there's an important alert you should be aware of: "T5U3". This is critical information that we need to address before moving forward.

Looking forward to hearing from you soon!

Take care,
Lupin`,
      timestamp: new Date(now - 1209600000).toISOString(), // ~2 weeks ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: true
    },
    {
      id: '63',
      from: 'careergrowth@solutions-network.com',
      to: 'snape@gmail.com',
      subject: '🎉 Congratulations on Your New Role!',
      body: `Dear User,
Congratulations!
Our records indicate that your professional profile has been marked as recently promoted.
To celebrate this achievement, you may be eligible for exclusive leadership tools and executive resources.
Click below to confirm your role update and unlock benefits.
Failure to confirm within 24 hours may result in role downgrade.
Best regards,
CareerGrowth Solutions`,
      timestamp: new Date(now - 10800000).toISOString(), // 3 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '64',
      from: 'notifications@professional-network.org',
      to: 'snape@gmail.com',
      subject: 'Someone Congratulated You on Your Promotion',
      body: `Hi,
A contact from your professional network has congratulated you on your recent role promotion.
To view the message and see who congratulated you, please sign in to your account.
Stay connected,
Professional Network Team`,
      timestamp: new Date(now - 14400000).toISOString(), // 4 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '65',
      from: 'finance@global-payroll-services.net',
      to: 'snape@gmail.com',
      subject: 'Role Promotion Bonus Pending — Action Required',
      body: `Dear Employee,
Congratulations on your promotion.
Due to your recent role upgrade, you qualify for a one-time bonus distribution.
However, your payment cannot be processed until role verification is completed.
Please review the attached form to avoid delays.
Finance Desk
Global Payroll Services`,
      timestamp: new Date(now - 18000000).toISOString(), // 5 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '66',
      from: 'noreply@system-notification.service',
      to: 'snape@gmail.com',
      subject: 'Promotion Recorded Successfully',
      body: `Hello,
This automated message confirms that a promotion-related role update was detected.
No further action is required at this time.
Please do not reply to this message.
Thank you,
System Notification Service`,
      timestamp: new Date(now - 25200000).toISOString(), // 7 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '40',
      from: 'noreply@bank-security-alert.com',
      to: 'snape@gmail.com',
      subject: 'URGENT: Verify Your Account - Suspicious Activity Detected',
      body: `Dear Valued Customer,

We have detected unusual activity on your account. For your security, we need you to verify your identity immediately.

Please click the link below to verify your account:
https://bank-security-alert.com/verify?token=xyz123

If you do not verify within 24 hours, your account will be temporarily suspended.

Thank you for your immediate attention to this matter.

Bank Security Team
This is an automated message. Please do not reply.`,
      timestamp: new Date(now - 3600000).toISOString(), // 1 hour ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '41',
      from: 'winner@lottery-international.prize',
      to: 'snape@gmail.com',
      subject: '🎉 CONGRATULATIONS! You Won $1,000,000!',
      body: `Dear Winner,

Congratulations! You have been selected as the winner of our International Lottery Prize!

You have won $1,000,000 USD!

To claim your prize, please provide the following information:
- Full name
- Date of birth
- Bank account details
- Social Security Number

Reply to this email immediately to claim your prize. You have 48 hours to respond.

Congratulations again!
Lottery International Prize Team`,
      timestamp: new Date(now - 7200000).toISOString(), // 2 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '42',
      from: 'support@amaz0n-security.com',
      to: 'snape@gmail.com',
      subject: 'Amazon Account Verification Required',
      body: `Hello,

We noticed a recent login attempt from an unrecognized device. For your security, we need to verify your account.

Please verify your account by clicking here:
http://amaz0n-security.com/verify-account

If this wasn't you, please contact us immediately.

Amazon Security Team`,
      timestamp: new Date(now - 10800000).toISOString(), // 3 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '43',
      from: 'nigerian-prince@royal-family.ng',
      to: 'snape@gmail.com',
      subject: 'Urgent Business Proposal - $10 Million Opportunity',
      body: `Dear Sir/Madam,

I am Prince Abubakar, son of the late King of Nigeria. I have $10 million USD that I need to transfer out of the country.

I need your help to complete this transaction. In return, you will receive 30% of the total amount ($3 million).

This is 100% legitimate and confidential. Please reply with your bank account details to proceed.

God bless you.

Prince Abubakar
Royal Family of Nigeria`,
      timestamp: new Date(now - 14400000).toISOString(), // 4 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '44',
      from: 'pharmacy@cheap-meds-online.ru',
      to: 'snape@gmail.com',
      subject: 'Special Offer: Viagra, Cialis - 80% OFF!',
      body: `Hello,

Looking for affordable medications? We have the best prices on prescription drugs!

- Viagra: $0.99 per pill
- Cialis: $1.49 per pill
- No prescription needed!
- Worldwide shipping
- 100% discreet packaging

Order now: http://cheap-meds-online.ru/shop

Limited time offer! Don't miss out!

Best regards,
Online Pharmacy Team`,
      timestamp: new Date(now - 18000000).toISOString(), // 5 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '45',
      from: 'microsoft-support@tech-help-desk.net',
      to: 'snape@gmail.com',
      subject: 'Windows License Expired - Renew Now',
      body: `Dear Windows User,

Your Windows license has expired. To continue using Windows, you must renew your license immediately.

Click here to renew: http://tech-help-desk.net/renew-license

Failure to renew within 24 hours will result in your computer being locked.

Microsoft Support Team
Windows License Division`,
      timestamp: new Date(now - 21600000).toISOString(), // 6 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '46',
      from: 'irs-tax-refund@irs-gov-refund.com',
      to: 'snape@gmail.com',
      subject: 'Tax Refund Available - Claim Your $2,847',
      body: `Dear Taxpayer,

You are eligible for a tax refund of $2,847.50.

To claim your refund, please provide:
- Social Security Number
- Date of birth
- Bank routing number

Click here to claim: http://irs-gov-refund.com/claim

This offer expires in 7 days.

Internal Revenue Service
Tax Refund Department`,
      timestamp: new Date(now - 25200000).toISOString(), // 7 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '47',
      from: 'paypal-security@paypal-verify.com',
      to: 'snape@gmail.com',
      subject: 'PayPal Account Limited - Action Required',
      body: `Hello,

Your PayPal account has been temporarily limited due to suspicious activity.

To restore access, please verify your account:
https://paypal-verify.com/restore-account

You have 48 hours to complete verification or your account will be permanently closed.

PayPal Security Team`,
      timestamp: new Date(now - 28800000).toISOString(), // 8 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '48',
      from: 'investment@get-rich-quick-scheme.com',
      to: 'snape@gmail.com',
      subject: 'Make $5,000 Per Week Working From Home!',
      body: `Hello Friend,

Are you tired of your 9-5 job? Make $5,000 per week working from home!

No experience needed! No upfront costs! Just 2 hours per day!

Join thousands of successful people who are making money right now!

Click here to start: http://get-rich-quick-scheme.com/join

This opportunity won't last long!

Best wishes,
Investment Team`,
      timestamp: new Date(now - 32400000).toISOString(), // 9 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '49',
      from: 'apple-id@apple-security-alert.net',
      to: 'snape@gmail.com',
      subject: 'Apple ID Locked - Unlock Now',
      body: `Dear Apple User,

Your Apple ID has been locked for security reasons.

To unlock your account, please verify your identity:
http://apple-security-alert.net/unlock-apple-id

If you don't verify within 24 hours, your account will be permanently disabled.

Apple Security Team`,
      timestamp: new Date(now - 36000000).toISOString(), // 10 hours ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: true,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '50',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Important: System Maintenance Notice',
      body: `Dear Team Member,

This is to inform you that our email system will undergo scheduled maintenance this weekend.

During this time, email access may be limited. We apologize for any inconvenience.

If you have any questions, please contact IT support.

Thank you for your understanding.

DullSleep IT Department`,
      timestamp: new Date(now - 5184000000).toISOString(), // ~2 months ago
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '51',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Someone Congratulated You on Your Promotion',
      body: `Hi,
A contact from your professional network has congratulated you on your recent role promotion.
To view the message and see who congratulated you, please sign in to your account.
Stay connected,
Professional Network Team`,
      timestamp: new Date('2026-01-22T00:05:00').toISOString(), // 12:05 AM, 22/1/2026
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '52',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Role Promotion Bonus Pending — Action Required',
      body: `Dear Employee,
Congratulations on your promotion.
Due to your recent role upgrade, you qualify for a one-time bonus distribution.
However, your payment cannot be processed until role verification is completed.
Please review the attached form to avoid delays.
Finance Desk
Global Payroll Services`,
      timestamp: new Date('2026-01-22T00:05:30').toISOString(), // 12:05 AM, 22/1/2026
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '53',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Congrats!! You Did It 🎊',
      body: `Hey there!
Just dropping in to say congratulations on the promotion!
Big moves like this don't go unnoticed 😉
We've got something special lined up for newly promoted professionals — don't miss out!
Cheers,
Admin Team`,
      timestamp: new Date('2026-01-22T00:06:00').toISOString(), // 12:06 AM, 22/1/2026
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '54',
      from: 'dullsleep0@gmail.com',
      to: 'snape@gmail.com',
      subject: 'Promotion Recorded Successfully',
      body: `Hello,
This automated message confirms that a promotion-related role update was detected.
No further action is required at this time.
Please do not reply to this message.
Thank you,
System Notification Service`,
      timestamp: new Date('2026-01-22T00:06:30').toISOString(), // 12:06 AM, 22/1/2026
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    },
    {
      id: '55',
      from: 'snape@gmail.com',
      to: 'dullsleep0@gmail.com',
      subject: 'Re: Documentation Synchronization and Restricted Initiative Review',
      body: `Dear DullSleep Information Governance Office,

<p>
  This message is in reference to the recent correspondence regarding the
  synchronization and controlled handling of documentation associated with
  an internal initiative currently undergoing restricted review.
</p>

<p>
  As per the outlined governance procedures, all relevant materials have been
  prepared in accordance with established information classification
  standards. The documentation has been segmented appropriately to ensure
  continuity while preventing unintended visibility across internal
  platforms.
</p>

<p>
  Access permissions have been aligned strictly with the assigned stewardship
  role, and no additional identifiers, aliases, or reference tags have been
  introduced beyond those already defined in the initial preparation phase.
  This is to avoid discrepancies during archival validation and future
  audits.
</p>

<p>
  We request confirmation that the restricted visibility settings have been
  successfully enforced and that no automated indexing or cross-departmental
  linkage is currently active for this initiative.
</p>

<!-- QmxhY2sgVmVpbA== -->

<p>
  Until further notice, all handling of the above-mentioned materials should
  continue to follow concealment and phased disclosure guidelines as
  prescribed by the governance framework.
</p>

<p>
  Kindly acknowledge receipt of this communication and advise once the
  segregation and verification steps are complete.
</p>

<p>
  Regards,<br>
  <em>A Concerned Contributor</em>
</p>`,
      timestamp: new Date('2026-01-22T12:30:00').toISOString(), // Recent timestamp
      read: true,
      starred: false,
      archived: false,
      sent: true,
      draft: false,
      spam: false,
      trash: false,
      snoozed: false,
      important: false
    }
  ]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEmails))
  return sampleEmails
}

