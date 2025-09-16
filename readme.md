# weather app
free to use public, weather forecast

# app feature
changes degree celcius to degree farenhit
allows to search cities (cities acording to openweather api)
tracks current location weather when allowed

# repo link
https://github.com/hdn-2025/weather-app/tree/main

# add-commit-push-pull

PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git init
Initialized empty Git repository in C:/Users/het47/OneDrive/Desktop/weatherapplication/.git/
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        app.html
        app.js
        readme.md

nothing added to commit but untracked files present (use "git add" to track)


#app.html

PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git add app.html
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git commit -m 'app.html'
[master (root-commit) 85d14d8] app.html
 1 file changed, 81 insertions(+)
 create mode 100644 app.html
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git push origin main
error: src refspec main does not match any
error: failed to push some refs to 'origin'
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git remote add origin https://github.com/hdn-2025/weather-app.git
github.com/hdn-2025/weather-app.git
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git push origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/hdn-2025/weather-app.git'     
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git branch -M main
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git push -u origin main       
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 1.12 KiB | 1.12 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/hdn-2025/weather-app.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

#app.js

PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git add app.js
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git commit -m 'app.js'
[main 7ab1c46] app.js
 1 file changed, 187 insertions(+)
 create mode 100644 app.js
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git remote add origin https://github.com/hdn-2025/weather-app.git    
error: remote origin already exists.
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git branch -M main
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git push -u origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 2.35 KiB | 2.35 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/hdn-2025/weather-app.git
   85d14d8..7ab1c46  main -> main
branch 'main' set up to track 'origin/main'.

# readme.md
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git add readme.md
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git commit -m 'readme.md'
[main 1cfb375] readme.md
 1 file changed, 77 insertions(+)
 create mode 100644 readme.md
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git remote add origin https://github.com/hdn-2025/weather-app.git
error: remote origin already exists.
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git remote add origin https://github.com/hdn-2025/weather-app.git
error: remote origin already exists.
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git branch -M main
PS C:\Users\het47\OneDrive\Desktop\weatherapplication> git push -u origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.13 KiB | 1.13 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/hdn-2025/weather-app.git
   7ab1c46..1cfb375  main -> main
branch 'main' set up to track 'origin/main'.
# author
het


