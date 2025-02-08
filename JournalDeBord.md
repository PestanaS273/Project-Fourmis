# Journal de Bord

## 28/01/2025

The project session started by analyzing and testing a website, we had to look for bugs, mark them down and how to reproduce them. We decided to split the team in two parts, one in charge of fullflying the markdown file with all the reported bugs, and the other teams will work individually on each bug in order to create a plan for it.
After finding some bugs, we had to discuss what is really considered a bug, and what is considered a remaining feature to develop.
We decided to mark them as bugs, so the dev team can either develop the new feature or modify the current feature in order to have the funcitonality. The issues were marked down in the "BugsFinded.md" and in the issues section in GitHub as well.

After the first 2 hours, the website updated from 1.0.8 to 1.0.9, we had to perform all the previous tests we performed and see if they were ressolved or not. For the most part of them, it wasn't. 

We also discovered the "Milestones" function on GitHub for issues. This could be a really interesting feature, however it can be really hard to maintain and to read if in each update there is not bugs resolved, cause in this case 10 from the 12 remain, and if we use a milestone for the v1.0.8 and another for the 1.0.9, they will be almost identical. If we continue with this dynamic, we will end copy pasting the same bugs and maybe adding some more. 
However, if we reduce the number of bugs in each update, it will be interesting to use the milestone function to have a clear and detailed perseption of the current bugs for a concrete version. 

We also remarked that tools like the markdown files we made, or Excel or Word files are not adapted for this type of situations, and most importantly they are not adapted for several persons working on the same file for the same issues. We need ot find a more accurate tool, letting identify and mark down the issues and splitting up the work.

## 03/02/2025

A clean way to perform the tests and keep no new data in the database can be:
- Creation / Destruction of tables before and after each test.
    This can make the process of each test really long if we have to perform a lot of migrations
    But also it is efficient in order to not impact the database at the end of the test.
    It is Simple and can be executed in parallel
- Creation / Destruction of each element created in tables before and after each test. 
    This is more efficient compare to the first solution
    However, the time consumming can be also easily escaled.
    It is simple

- In memory: On crois que cette méthode permet de recuperer les IDs des elements crée par les testsn pour executer un 
    delete for each apres les tests. 

- Rollback: Make tests rollback after each transaction: Django / SQAlchemy le fait, dans d'autres il faut le faire a la main
    Parallelism guaranteed

- Tests CleanUP: usage not encourage. 

- Unique Random: Genrate an random ID for the team, create the team and make the assert in all teams. We do not clean anymore the Database, we use unique IDs in order to check creations, modifications... This solutions allows to create a Database that can increase each test is runned, so the database will be more likely to the production database. 
    We can implemente it with 'Faker'
    Considerable problem could be that some tests cannot be written and it requires coding style.
    The assertion at the end it's only 'contains' in the table

