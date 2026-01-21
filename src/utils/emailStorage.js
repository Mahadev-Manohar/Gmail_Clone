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
      }
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEmails))
  }
}

// Get all emails
export const getEmails = () => {
  initializeSampleEmails()
  const emails = localStorage.getItem(STORAGE_KEY)
  return emails ? JSON.parse(emails) : []
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
    }
  ]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEmails))
  return sampleEmails
}

