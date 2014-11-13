<font color = 0>
<font size = 8><b>User-Centered Design</b></font><br>
<font size="2"">2014-11-12 MODFIED: Richard Grossman</font><br>
<font size="2"">unknown--- CREATED: Existing course material</font>  


#####Preface: 
This material, as it existed in the course materials, represents what is widely taught.  However, in the "real world", there's a little more to it.  But you need to know the "official" version that most people understand.  I have added my viewpoints with my name so that you know within what context each statement is made.

###What is UCD?

User-Centered Design is an approach to product design/development that maintains a persistent focus on users throughout the planning, creation, and deployment of that product. 

Richard: Allegedly.  In reality, it is or should be result-driven and then user-centered within that.

###Why should we care?

- *My users are the reason I'm making this product.* Repeat this daily. It's your new mantra. If you forget about your users, whose problem are you solving?
- User acquisition/retention is hard enough when your product is well-designed. If you aren't thinking about your users' needs, you aren't thinking about how to keep them engaged with your product.
- Thinking carefully about your users and their needs takes a great deal of guesswork out of design (and makes planning easier!).

Richard: Think about what you authentically want to provide and receive from your users.


###Design patterns (and pitfalls) 

(This list goes from low user focus to high user focus.)

- **Non-design / Unintentional Design** Building a product without paying attention to design, users, or use cases. Any design that happens is incidental.
	- *Pros:* No user-focused time/effort required during planning and development.
	- *Cons:* Very risky; chance of landing on a usable/optimal design is low. Likely to require modifications after release/negative user feedback.
- **Solving Your Own Problems / Self-Design** Designing a product with yourself/your team in mind. (You're your own target user.)
	- *Ex* 
	- *Pros:* Completely viable for internal tools.
	- *Cons:* Not everyone works the way you do/has the same problems you have. You're limiting your audience to people just like you, and likely missing out on a larger user base.
- **Experience-Based / "Genius" Design** Constructing a product using design lessons learned from past experience and/or the guidance of a designer.
	- *Pros:* Experienced designers have acquired knowledge from past product cycles that may prove useful to your current product. Some design best practices are patterns, and can be repeated for many scenarios.
	- *Cons:* Feedback is critical to good design, and not supplying your designer with input about your current product means that they may miss something special. Most great designers approach their work scientifically, constantly seeking feedback and testing hypotheses.
- **Function-Driven / Activity-Focused Design** Crafting use cases and designing for them, but limiting design focus to activities and actions.
	- *Pros:* Workflow focus is important, and paying attention to user actions means that it's likely that decisions will be made with ease of use in mind.
	- *Cons:* This can be difficult to do when actions are new/different from familiar tasks or the team cannot relate to activity contexts.
- **User-Centered Design** Designing with the user at the center -- paying attention to app activities, action contexts, and user goals/motivations. 
	- *Pros:* Most likely to lead to a product that users will engage with; user observation can help designers identify hidden needs and patterns of behavior that would not be discoverable under another design approach.
	- *Cons:* Time-consuming; requires research and knowledge of user (or target user).
	
Richard: Most companies and projects already talk-the-talk of UCD, and they often endlessly debate it, without any evidence or research.  That's the problem that General Assembly's UXDI course is focusing on solving.
	
###The ISO Standard

We know that User Experience Design is a huge field -- GA even has an immersive program for it!  -- so we don't expect you to be able to do **full** User Centered Design during your WDI dev cycles. These principles are great to keep in mind:

ISO's *Human-centred design for interactive systems (ISO 9241-210, 2010).*

- The design is based upon an explicit understanding of users, tasks and environments.
- Users are involved throughout design and development.
- The design is driven and refined by user-centered evaluation.
- The process is iterative.
- The design addresses the whole user experience.
- The design team includes multidisciplinary skills and perspectives.

Richard:  Yes, we do expect you to do **full** UCD during your WDI dev.  You won't be able to put a team on it for 6 weeks, but you can still touch on the key points to the best of your experience.


###Design Deliverables

Today, we'll explore several design deliverables that you may encounter or create at some stage during a project cycle:

- **Personas** represent our "typical" users. They are not meant to be composites; rather, they're documents designed to put a name and face to user groups. Humanizing users helps the design/development team connect more closely with user wants and needs.
	- Often, designers will spend a great deal of time conducting or reading market research to determine representative traits and motivations of various user segments. For new/emerging markets, this data may not be available.
	- These deliverables include dossiers for a sample set of fake users. Give your users names, ages, backgrounds, careers (or lack thereof), hopes and dreams, fears, and opinions. The more "real" a persona seems, the more effective they will be. Select a stock photo for each persona.
	
- **Scenarios** are brief stories involving personas. They involve opinions, feelings, habits, and motivations, and are often structured as "day in the life" narratives about specific personas.
	- Some relate directly to the product/app -- how long they've been a user, how deeply they engage with the product, specific actions they wish to take with the product. 
	- Others provide context for their opinions or inclinations -- a tendency to check a mobile device during the workday, a preference for buying the latest technology, a mistrust of applications that ask for credit card information. 
	- Scenarios should help shape the way you design interactions for users, but shouldn't be the end-all-be-all; different user types may have conflicting scenarios, and you'll have to make a decision about what's best for either your highest-priority users or the majority of your users.

- **Use Cases** are statements that describe interactions (generally, with the world -- specifically, with your product). 
	- There are many formats for crafting use cases, but most of them involve a list of *actors* (users, other entities) and set of *actions* or *steps* followed by those actors. 
	- They are meant to break down processes from an interaction standpoint (versus agile stories, which, though connected to user needs, target business or technical requirements).
	- Use cases are specific to a given interaction, and are often written in groups pertaining to a feature. You may have a set of use cases for user account creation and login, purchase transactions, or other features that users will engage with.
	- Typically, use cases will have 2-5 steps or items per case, though some may be more extensive. Be as detailed as you need to be to communicate the basics of the interaction, but don't go into so much detail that you're actually building it.
	
Richard:  In an agile environment, you can collapse Personas, Scenarios, and Use Cases.


###Design Deliverable Lab for Project 3

In your project teams, discuss and create the following:

- at least 3 distinct personas representing typical users of your app
- 2 or more scenarios for each persona
- at least 6 use cases (may or may not be linked to specific personas)

Package these deliverables in a deck/slideshow, and be prepared to talk about them during your Friday check-in, and in your project presentation.

Richard: A very condensed version of this should be part of how you describe your portfolio projects to potential employers.

And on interviews, when they ask you if you have questions, ask them who uses their product or service and what kind of customers they are pursuing, and how that is reflected in their technology stack.


### BONUS  
Richard:  I asked a few students from the previous cohort what they now know or what was important about UCD:

Blaise Thomas:    
This was a great lesson. Subsequently I have learned (through a coder friend who is UX but has been coding for 10 years) about User stories in the format:     
 
 		As a [role], I can [feature] so that [reason]    
    
   		This guy is a proper super-hot UX engineer and he had an excel table with the above ^ as the first three columns, and then notes on the performance of those features in the subsequent columns.    
  
 As a User, I can Sign Up, so that I can Log in    
 As A User I can Log in, so that I can find the Dashboard  
 As a user, I can search IMDB, from my Dashboard    
 As a user I can search rotten Tomatoes .....     
 As a User I can create a new playlist, from my dashboard.    
As a user, I can connect with other users...

       



-end-