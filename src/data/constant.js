// here i will be defining all the data for the page like bio skills

export const Bio = {
    name: "Tarun Kumar Sharma",
    roles: [
      "Full Stack Developer",
      "Laravel Developer",
      "Vue/React Developer",
      "Programmer",
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/Mythbuster1",
    resume:
      "https://www.google.com",
    linkedin: "https://www.linkedin.com/in/tarun-sharma-721952221/",
    twitter: "https://twitter.com/TarunKu61895842",
    insta: "https://www.instagram.com/tarun._.bhardwaj/",
    facebook: "https://www.facebook.com/profile.php?id=100013698319012",
};
  
export const skills = [
  {
      title: "Frontend",
      skills: [
      {
          name: "React Js",
          image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
          name: "Vue Js",
          image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjE2ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDIyMSI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDB6Ii8+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAweiIvPjxwYXRoIGZpbGw9IiMzNTQ5NUUiIGQ9Ik01MC41NiAwTDEyOCAxMzMuMTJMMjA0LjggMGgtNDcuMzZMMTI4IDUxLjJMOTcuOTIgMHoiLz48L3N2Zz4=",
      },
      {
        name: "SASS",
          image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNjNjkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDJBMTQgMTQgMCAxIDEgMiAxNkExNCAxNCAwIDAgMSAxNiAyIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0Ljc4MiA3Ljk5MmMtLjYzNC0yLjQ4Ni00Ljc1Ny0zLjMtOC42NTktMS45MThhMTkuNjA1IDE5LjYwNSAwIDAgMC02LjY0NCAzLjgxMWMtMi4xNDkgMi4wMS0yLjQ5MiAzLjc2LTIuMzUxIDQuNDkxYy41IDIuNTggNC4wMzMgNC4yNjYgNS40ODYgNS41MTd2LjAwN2MtLjQyOC4yMTEtMy41NjQgMS44LTQuMyAzLjQyYy0uNzc0IDEuNzEyLjEyMyAyLjk0LjcxOCAzLjEwNUE0LjQgNC40IDAgMCAwIDEzLjc4IDI0LjVhNC44MjQgNC44MjQgMCAwIDAgLjQ3Mi00LjI4OGE1LjYzOSA1LjYzOSAwIDAgMSAyLjE0My0uMTIzYzIuNDU2LjI4NyAyLjkzOCAxLjgyIDIuODQ2IDIuNDYyYTEuNjIgMS42MiAwIDAgMS0uNzc5IDEuMWMtLjE3Mi4xMDctLjIyNS4xNDMtLjIxLjIyM2MuMDIxLjExNS4xLjExMS4yNDcuMDg2YTEuOTE1IDEuOTE1IDAgMCAwIDEuMzM2LTEuNzA3Yy4wNTktMS41LTEuMzgyLTMuMTg2LTMuOTM0LTMuMTQzYTYuNzM2IDYuNzM2IDAgMCAwLTIuMTg5LjNhNS44NDQgNS44NDQgMCAwIDAtLjEwOC0uMTJjLTEuNTc4LTEuNjgzLTQuNDk0LTIuODc0LTQuMzcxLTUuMTM3Yy4wNDUtLjgyMy4zMzEtMi45ODkgNS42LTUuNjE3YzQuMzItMi4xNTMgNy43NzgtMS41NiA4LjM3Ni0uMjQ3Yy44NTQgMS44NzYtMS44NDggNS4zNjEtNi4zMzQgNS44NjRhMy4zNyAzLjM3IDAgMCAxLTIuODMzLS43MThjLS4yMzYtLjI2LS4yNzEtLjI3MS0uMzU5LS4yMjNjLS4xNDMuMDc5LS4wNTIuMzA5IDAgLjQ0NWEyLjY1OSAyLjY1OSAwIDAgMCAxLjYyMSAxLjI3NGE4LjU5MiA4LjU5MiAwIDAgMCA1LjI1OC0uNTJjMi43MjEtMS4wNDkgNC44NDMtMy45NzQgNC4yMi02LjQxOU0xMy4yMTggMjAuNjYzYTMuNTg0IDMuNTg0IDAgMCAxLS4wMjkgMi4wOTJxLS4wMzUuMTA2LS4wNzcuMjF0LS4wOTEuMmEzLjkxMSAzLjkxMSAwIDAgMS0uNjQ3Ljk0M2MtLjgxMy44ODctMS45NSAxLjIyMy0yLjQzNy45NGMtLjUyNi0uMzA1LS4yNjMtMS41NTYuNjgtMi41NTNhOS40NzggOS40NzggMCAwIDEgMi40NzQtMS43NjJaIi8+PC9zdmc+",
      },
      {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
          name: "CSS",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
          name: "JavaScript",
          image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
          name: "Tailwind",
          image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjY3ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDE1NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsb2dvc1RhaWx3aW5kY3NzSWNvbjAiIHgxPSItMi43NzglIiB4Mj0iMTAwJSIgeTE9IjMyJSIgeTI9IjY3LjU1NiUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyMjk4QkQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRUQ3QjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2xvZ29zVGFpbHdpbmRjc3NJY29uMCkiIGQ9Ik0xMjggMEM5My44NjcgMCA3Mi41MzMgMTcuMDY3IDY0IDUxLjJDNzYuOCAzNC4xMzMgOTEuNzMzIDI3LjczMyAxMDguOCAzMmM5LjczNyAyLjQzNCAxNi42OTcgOS40OTkgMjQuNDAxIDE3LjMxOEMxNDUuNzUxIDYyLjA1NyAxNjAuMjc1IDc2LjggMTkyIDc2LjhjMzQuMTMzIDAgNTUuNDY3LTE3LjA2NyA2NC01MS4yYy0xMi44IDE3LjA2Ny0yNy43MzMgMjMuNDY3LTQ0LjggMTkuMmMtOS43MzctMi40MzQtMTYuNjk3LTkuNDk5LTI0LjQwMS0xNy4zMThDMTc0LjI0OSAxNC43NDMgMTU5LjcyNSAwIDEyOCAwTTY0IDc2LjhDMjkuODY3IDc2LjggOC41MzMgOTMuODY3IDAgMTI4YzEyLjgtMTcuMDY3IDI3LjczMy0yMy40NjcgNDQuOC0xOS4yYzkuNzM3IDIuNDM0IDE2LjY5NyA5LjQ5OSAyNC40MDEgMTcuMzE4QzgxLjc1MSAxMzguODU3IDk2LjI3NSAxNTMuNiAxMjggMTUzLjZjMzQuMTMzIDAgNTUuNDY3LTE3LjA2NyA2NC01MS4yYy0xMi44IDE3LjA2Ny0yNy43MzMgMjMuNDY3LTQ0LjggMTkuMmMtOS43MzctMi40MzQtMTYuNjk3LTkuNDk5LTI0LjQwMS0xNy4zMThDMTEwLjI0OSA5MS41NDMgOTUuNzI1IDc2LjggNjQgNzYuOCIvPjwvc3ZnPg==",
      },
      {
          name: "TypeScript",
          image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
          name: "Bootstrap",
          image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
          name: "Material UI",
          image:
          "data:image/png;base64,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",
      },
      ],
  },
  {
      title: "Backend",
      skills: [
      {
          name: "PHP",
          image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0idXJsKCNkZXZpY29uUGhwMCkiIGQ9Ik0wIDY0YzAgMTguNTkzIDI4LjY1NCAzMy42NjcgNjQgMzMuNjY3YzM1LjM0NiAwIDY0LTE1LjA3NCA2NC0zMy42NjdjMC0xOC41OTMtMjguNjU1LTMzLjY2Ny02NC0zMy42NjdDMjguNjU0IDMwLjMzMyAwIDQ1LjQwNyAwIDY0Ii8+PHBhdGggZmlsbD0iIzc3N2JiMyIgZD0iTTY0IDk1LjE2N2MzMy45NjUgMCA2MS41LTEzLjk1NSA2MS41LTMxLjE2N2MwLTE3LjIxNC0yNy41MzUtMzEuMTY3LTYxLjUtMzEuMTY3UzIuNSA0Ni43ODYgMi41IDY0YzAgMTcuMjEyIDI3LjUzNSAzMS4xNjcgNjEuNSAzMS4xNjciLz48cGF0aCBkPSJNMzQuNzcyIDY3Ljg2NGMyLjc5MyAwIDQuODc3LS41MTUgNi4xOTYtMS41M2MxLjMwNi0xLjAwNiAyLjIwNy0yLjc0NyAyLjY4LTUuMTc1Yy40NC0yLjI3LjI3Mi0zLjg1NC0uNS00LjcxYy0uNzg4LS44NzQtMi40OTMtMS4zMTctNS4wNjctMS4zMTdoLTQuNDY0bC0yLjQ3MyAxMi43MzJ6TTIwLjE3MyA4My41NDdhLjY5NC42OTQgMCAwIDEtLjY4LS44MjhsNi41NTctMzMuNzM4YS42OTUuNjk1IDAgMCAxIC42OC0uNTYxaDE0LjEzNGM0LjQ0MiAwIDcuNzQ4IDEuMjA2IDkuODI3IDMuNTg1YzIuMDg4IDIuMzkgMi43MzQgNS43MzQgMS45MTcgOS45MzVjLS4zMzMgMS43MTEtLjkwNSAzLjMtMS43IDQuNzI0YTE1LjgxOCAxNS44MTggMCAwIDEtMy4xMjggMy45MmMtMS41MzEgMS40MzItMy4yNjQgMi40NzItNS4xNDcgMy4wODNjLTEuODUyLjYwNC00LjIzMi45MS03LjA3LjkxaC01LjcyNGwtMS42MzQgOC40MDhhLjY5NS42OTUgMCAwIDEtLjY4Mi41NjJ6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM0LjE5IDU1LjgyNmgzLjg5MWMzLjEwNyAwIDQuMTg2LjY4MiA0LjU1MyAxLjA4OWMuNjA3LjY3NC43MjMgMi4wOTcuMzMxIDQuMTEyYy0uNDM5IDIuMjU3LTEuMjUzIDMuODU4LTIuNDIgNC43NTZjLTEuMTk0LjkyLTMuMTM4IDEuMzg2LTUuNzczIDEuMzg2aC0yLjc4NnptNi42NzQtOC4xSDI2LjczMWExLjM5IDEuMzkgMCAwIDAtMS4zNjQgMS4xMjNMMTguODEgODIuNTg4YTEuMzkgMS4zOSAwIDAgMCAxLjM2MyAxLjY1M2g3LjM1YTEuMzkgMS4zOSAwIDAgMCAxLjM2My0xLjEyNGwxLjUyNS03Ljg0Nmg1LjE1MWMyLjkxMiAwIDUuMzY0LS4zMTggNy4yODctLjk0NGMxLjk3Ny0uNjQyIDMuNzk2LTEuNzMxIDUuNDA2LTMuMjM3YTE2LjUyMiAxNi41MjIgMCAwIDAgMy4yNTktNC4wODdjLjgzMS0xLjQ4NyAxLjQyOS0zLjE0NyAxLjc3NS00LjkzMWMuODYtNC40MjMuMTYxLTcuOTY0LTIuMDc2LTEwLjUyNGMtMi4yMTYtMi41MzctNS42OTgtMy44MjMtMTAuMzQ5LTMuODIzek0zMC4zMDEgNjguNTU3aDQuNDcxYzIuOTYzIDAgNS4xNy0uNTU3IDYuNjItMS42NzVjMS40NTEtMS4xMTYgMi40MjgtMi45OCAyLjkzOC01LjU5MWMuNDg1LTIuNTA4LjI2NC00LjI3Ny0uNjY1LTUuMzA4Yy0uOTMxLTEuMDMtMi43OTEtMS41NDYtNS41ODQtMS41NDZoLTUuMDM2bC0yLjc0MyAxNC4xMm0xMC41NjMtMTkuNDQ1YzQuMjUyIDAgNy4zNTMgMS4xMTcgOS4zMDMgMy4zNDhjMS45NSAyLjIzMiAyLjUzNiA1LjM0NyAxLjc2IDkuMzQ2Yy0uMzIyIDEuNjQ4LS44NjMgMy4xNTQtMS42MjUgNC41MThjLS43NjQgMS4zNjYtMS43NiAyLjYxNC0yLjk5MSAzLjc0N2MtMS40NjggMS4zNzMtMy4wOTcgMi4zNTItNC44OTIgMi45MzVjLTEuNzk0LjU4NC00LjA4Ljg3NS02Ljg1Ny44NzVoLTYuMjk2bC0xLjc0MyA4Ljk3aC03LjM1bDYuNTU4LTMzLjczOXoiLz48cGF0aCBkPSJNNjkuNDU5IDc0LjU3N2EuNjk0LjY5NCAwIDAgMS0uNjgyLS44MjdsMi45LTE0LjkyOGMuMjc3LTEuNDIuMjA5LTIuNDM4LS4xOS0yLjg3Yy0uMjQ1LS4yNjMtLjk3OS0uNzA0LTMuMTUtLjcwNGgtNS4yNTZsLTMuNjQ2IDE4Ljc2OGEuNjk1LjY5NSAwIDAgMS0uNjgzLjU2aC03LjI5YS42OTUuNjk1IDAgMCAxLS42ODMtLjgyNmw2LjU1OC0zMy43MzlhLjY5NS42OTUgMCAwIDEgLjY4Mi0uNTYxaDcuMjlhLjY5NS42OTUgMCAwIDEgLjY4My44MjZMNjQuNDEgNDguNDJoNS42NTNjNC4zMDcgMCA3LjIyNy43NTggOC45MjggMi4zMjFjMS43MzMgMS41OTMgMi4yNzUgNC4xNCAxLjYwOCA3LjU3M2wtMy4wNTEgMTUuNzAyYS42OTUuNjk1IDAgMCAxLS42ODIuNTZ6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTY1LjMxIDM4Ljc1NWgtNy4yOTFhMS4zOSAxLjM5IDAgMCAwLTEuMzY0IDEuMTI0bC02LjU1NyAzMy43MzhhMS4zOSAxLjM5IDAgMCAwIDEuMzYzIDEuNjU0aDcuMjkxYTEuMzkgMS4zOSAwIDAgMCAxLjM2NC0xLjEyNGwzLjUzNy0xOC4yMDVoNC42ODJjMi4xNjggMCAyLjYyNC40NjMgMi42NDEuNDg0Yy4xMzIuMTQuMzA1Ljc5NS4wMTkgMi4yNjRsLTIuOSAxNC45MjdhMS4zOSAxLjM5IDAgMCAwIDEuMzY0IDEuNjU0aDcuNDA4YTEuMzkgMS4zOSAwIDAgMCAxLjM2My0xLjEyNGwzLjA1MS0xNS43Yy43MTUtMy42ODYuMTAzLTYuNDUtMS44Mi04LjIxN2MtMS44MzYtMS42ODYtNC45MS0yLjUwNS05LjM5OC0yLjUwNWgtNC44MWwxLjQyMS03LjMxNWExLjM5IDEuMzkgMCAwIDAtMS4zNjQtMS42NTVtMCAxLjM5bC0xLjc0MyA4Ljk2OGg2LjQ5NmM0LjA4NyAwIDYuOTA3LjcxNCA4LjQ1NyAyLjE0YzEuNTUzIDEuNDI2IDIuMDE3IDMuNzM1IDEuMzk4IDYuOTNsLTMuMDUyIDE1LjY5OWgtNy40MDdsMi45MDEtMTQuOTI4Yy4zMy0xLjY5OC4yMDgtMi44NTYtLjM2NS0zLjQ3NGMtLjU3My0uNjE3LTEuNzkzLS45MjYtMy42NTgtLjkyNmgtNS44MjlsLTMuNzU2IDE5LjMyN0g1MS40Nmw2LjU1OC0zMy43MzloNy4yOTJ6Ii8+PHBhdGggZD0iTTkyLjEzNiA2Ny44NjRjMi43OTMgMCA0Ljg3OC0uNTE1IDYuMTk4LTEuNTNjMS4zMDQtMS4wMDYgMi4yMDYtMi43NDcgMi42NzktNS4xNzVjLjQ0LTIuMjcuMjczLTMuODU0LS41LTQuNzFjLS43ODgtLjg3NC0yLjQ5My0xLjMxNy01LjA2Ny0xLjMxN2gtNC40NjNsLTIuNDc1IDEyLjczMnpNNzcuNTQgODMuNTQ3YS42OTQuNjk0IDAgMCAxLS42ODItLjgyOGw2LjU1Ny0zMy43MzhhLjY5NS42OTUgMCAwIDEgLjY4Mi0uNTYxSDk4LjIzYzQuNDQyIDAgNy43NDggMS4yMDYgOS44MjYgMy41ODVjMi4wODkgMi4zOSAyLjczNCA1LjczNCAxLjkxNyA5LjkzNWExNS44NzggMTUuODc4IDAgMCAxLTEuNjk5IDQuNzI0YTE1LjgzOCAxNS44MzggMCAwIDEtMy4xMjggMy45MmMtMS41MyAxLjQzMi0zLjI2NSAyLjQ3Mi01LjE0NyAzLjA4M2MtMS44NTIuNjA0LTQuMjMyLjkxLTcuMDcxLjkxaC01LjcyM2wtMS42MzMgOC40MDhhLjY5NS42OTUgMCAwIDEtLjY4My41NjJ6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkxLjU1NSA1NS44MjZoMy44OTFjMy4xMDcgMCA0LjE4Ni42ODIgNC41NTIgMS4wODljLjYxLjY3NC43MjQgMi4wOTcuMzMzIDQuMTEyYy0uNDQgMi4yNTctMS4yNTQgMy44NTgtMi40MjEgNC43NTZjLTEuMTk1LjkyLTMuMTM5IDEuMzg2LTUuNzczIDEuMzg2aC0yLjc4NnptNi42NzQtOC4xSDg0LjA5NmExLjM5IDEuMzkgMCAwIDAtMS4zNjMgMS4xMjNsLTYuNTU4IDMzLjczOWExLjM5IDEuMzkgMCAwIDAgMS4zNjQgMS42NTNoNy4zNWExLjM5IDEuMzkgMCAwIDAgMS4zNjMtMS4xMjRsMS41MjUtNy44NDZoNS4xNWMyLjkxMSAwIDUuMzY0LS4zMTggNy4yODYtLjk0NGMxLjk3OC0uNjQyIDMuNzk3LTEuNzMxIDUuNDA4LTMuMjM4YTE2LjUyIDE2LjUyIDAgMCAwIDMuMjU4LTQuMDg2Yy44MzItMS40ODcgMS40MjgtMy4xNDcgMS43NzUtNC45MzFjLjg2LTQuNDIzLjE2Mi03Ljk2NC0yLjA3Ni0xMC41MjRjLTIuMjE2LTIuNTM3LTUuNjk3LTMuODIzLTEwLjM1LTMuODIzek04Ny42NjYgNjguNTU3aDQuNDdjMi45NjQgMCA1LjE3LS41NTcgNi42MjItMS42NzVjMS40NS0xLjExNiAyLjQyOC0yLjk4IDIuOTM2LTUuNTkxYy40ODctMi41MDguMjY2LTQuMjc3LS42NjUtNS4zMDhjLS45My0xLjAzLTIuNzkxLTEuNTQ2LTUuNTgzLTEuNTQ2aC01LjAzNVptMTAuNTYzLTE5LjQ0NWM0LjI1MSAwIDcuMzU0IDEuMTE3IDkuMzAzIDMuMzQ4YzEuOTUgMi4yMzIgMi41MzcgNS4zNDcgMS43NTkgOS4zNDZjLS4zMiAxLjY0OC0uODYyIDMuMTU0LTEuNjI0IDQuNTE4Yy0uNzYzIDEuMzY2LTEuNzYgMi42MTQtMi45OTIgMy43NDdjLTEuNDY3IDEuMzczLTMuMDk3IDIuMzUyLTQuODkyIDIuOTM1Yy0xLjc5My41ODQtNC4wNzguODc1LTYuODU2Ljg3NWgtNi4yOTVsLTEuNzQ1IDguOTdoLTcuMzVsNi41NTgtMzMuNzM5aDE0LjEzMyIvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZGV2aWNvblBocDAiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzOC40MjYgNDIuMTY5KXNjYWxlKDg0LjA0MTM2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNBRUIyRDUiLz48c3RvcCBvZmZzZXQ9Ii4zIiBzdG9wLWNvbG9yPSIjQUVCMkQ1Ii8+PHN0b3Agb2Zmc2V0PSIuNzUiIHN0b3AtY29sb3I9IiM0ODRDODkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0ODRDODkiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",
      },
      {
          name: "Laravel",
          image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjk3ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI2NCI+PHBhdGggZmlsbD0iI0ZGMkQyMCIgZD0iTTI1NS44NTYgNTkuNjJjLjA5NS4zNTEuMTQ0LjcxMy4xNDQgMS4wNzd2NTYuNTY4YzAgMS40NzgtLjc5IDIuODQzLTIuMDczIDMuNTc4TDIwNi40NSAxNDguMTh2NTQuMThhNC4xMzUgNC4xMzUgMCAwIDEtMi4wNjIgMy41NzlsLTk5LjEwOCA1Ny4wNTNjLS4yMjcuMTI4LS40NzQuMjEtLjcyMi4yOTljLS4wOTMuMDMtLjE4LjA4Ny0uMjc4LjExM2E0LjE1IDQuMTUgMCAwIDEtMi4xMTQgMGMtLjExNC0uMDMtLjIxNy0uMDkzLS4zMjUtLjEzNGMtLjIyNy0uMDgzLS40NjQtLjE1NS0uNjgtLjI3OEwyLjA3MyAyMDUuOTM4QTQuMTI4IDQuMTI4IDAgMCAxIDAgMjAyLjM2VjMyLjY1NmMwLS4zNzIuMDUyLS43MzMuMTQ0LTEuMDgzYy4wMzEtLjExOS4xMDMtLjIyNy4xNDUtLjM0NmMuMDc3LS4yMTYuMTUtLjQzOC4yNjMtLjYzOWMuMDc3LS4xMzQuMTktLjI0Mi4yODMtLjM2NmMuMTE5LS4xNjUuMjI3LS4zMzUuMzY2LS40OGMuMTE5LS4xMTguMjc0LS4yMDYuNDA4LS4zMDljLjE1LS4xMjQuMjgzLS4yNTguNDUzLS4zNTZoLjAwNUw1MS42MTMuNTUxYTQuMTM1IDQuMTM1IDAgMCAxIDQuMTI1IDBsNDkuNTQ2IDI4LjUyNmguMDFjLjE2NS4xMDQuMzA1LjIzMi40NTQuMzUxYy4xMzQuMTAzLjI4NC4xOTYuNDAyLjMxYy4xNDUuMTQ5LjI0OC4zMi4zNzEuNDg0Yy4wODguMTI0LjIwNy4yMzIuMjc5LjM2NmMuMTE4LjIwNi4xODUuNDIzLjI2OC42NGMuMDQxLjExOC4xMTMuMjI2LjE0NC4zNWMuMDk1LjM1MS4xNDQuNzE0LjE0NSAxLjA3OFYxMzguNjVsNDEuMjg2LTIzLjc3M1Y2MC42OTJjMC0uMzYuMDUyLS43MjcuMTQ1LTEuMDcyYy4wMzYtLjEyNC4xMDMtLjIzMi4xNDQtLjM1Yy4wODMtLjIxNy4xNTUtLjQ0LjI2OC0uNjRjLjA3Ny0uMTM0LjE5LS4yNDIuMjc5LS4zNjZjLjEyMy0uMTY1LjIyNi0uMzM1LjM3LS40OGMuMTItLjExOC4yNjktLjIwNi40MDMtLjMwOWMuMTU1LS4xMjQuMjg5LS4yNTguNDU0LS4zNTZoLjAwNWw0OS41NTEtMjguNTI2YTQuMTMgNC4xMyAwIDAgMSA0LjEyNSAwbDQ5LjU0NiAyOC41MjZjLjE3NS4xMDMuMzA5LjIzMi40NjQuMzVjLjEyOC4xMDQuMjc4LjE5Ny4zOTcuMzFjLjE0NC4xNS4yNDcuMzIuMzcuNDg1Yy4wOTQuMTI0LjIwNy4yMzIuMjguMzY2Yy4xMTguMi4xODUuNDIzLjI2Ny42NGMuMDQ3LjExOC4xMTQuMjI2LjE0NS4zNW0tOC4xMTUgNTUuMjU4di00Ny4wNGwtMTcuMzM5IDkuOTgxbC0yMy45NTMgMTMuNzkydjQ3LjA0bDQxLjI5Ny0yMy43NzN6bS00OS41NDYgODUuMDk1VjE1Mi45bC0yMy41NjIgMTMuNDU3bC02Ny4yODEgMzguNHY0Ny41MTR6TTguMjU5IDM5Ljc5NnYxNjAuMTc3bDkwLjgzMyA1Mi4yOTR2LTQ3LjUwNUw1MS42NCAxNzcuOTA2bC0uMDE1LS4wMWwtLjAyLS4wMWMtLjE2LS4wOTMtLjI5NS0uMjI3LS40NDQtLjM0Yy0uMTMtLjEwNC0uMjc5LS4xODYtLjM5Mi0uM2wtLjAxLS4wMTVjLS4xMzQtLjEyOS0uMjI3LS4yODktLjM0LS40MzNjLS4xMDQtLjE0LS4yMjctLjI1OC0uMzEtLjQwMmwtLjAwNS0uMDE2Yy0uMDkzLS4xNTQtLjE1LS4zNC0uMjE3LS41MTVjLS4wNjctLjE1NS0uMTU0LS4zLS4xOTYtLjQ2NHYtLjAwNWMtLjA1MS0uMTk2LS4wNjEtLjQwMy0uMDgyLS42MDRjLS4wMi0uMTU0LS4wNjItLjMwOS0uMDYyLS40NjRWNjMuNTdMMjUuNTk4IDQ5Ljc3MmwtMTcuMzM5LTkuOTd6TTUzLjY4MSA4Ljg5M0wxMi4zOTkgMzIuNjU2bDQxLjI3MiAyMy43NjJMOTQuOTQ3IDMyLjY1TDUzLjY3MSA4Ljg5M3ptMjEuNDY4IDE0OC4yOThsMjMuOTQ4LTEzLjc4NlYzOS43OTZMODEuNzYgNDkuNzc4TDU3LjgwNSA2My41Njl2MTAzLjYwOHpNMjAyLjMyNCAzNi45MzVsLTQxLjI3NiAyMy43NjJsNDEuMjc2IDIzLjc2M2w0MS4yNzEtMjMuNzY4em0tNC4xMyA1NC42NzZsLTIzLjk1My0xMy43OTJsLTE3LjMzOC05Ljk4MXY0Ny4wNGwyMy45NDggMTMuNzg3bDE3LjM0NCA5Ljk4NnptLTk0Ljk3NyAxMDYuMDA2bDYwLjU0My0zNC41NjRsMzAuMjY0LTE3LjI3MmwtNDEuMjQ2LTIzLjc0N2wtNDcuNDg5IDI3LjM0bC00My4yODIgMjQuOTE4eiIvPjwvc3ZnPg==",
      },
      {
        name: "API",
        image: "https://img.freepik.com/premium-vector/api-application-programming-interface-cloud-software-integration-icon_116137-1817.jpg?w=900"
      },
      {
          name: "MySQL",
          image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      ],
  },
  {
      title: "Others",
      skills: [
      {
          name: "Git",
          image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
          name: "GitHub",
          image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
          name: "Docker",
          image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
          name: "Netlify",
          image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
          name: 'Vercel',
          image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjE2ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDIyMiI+PHBhdGggZD0ibTEyOCAwbDEyOCAyMjEuNzA1SDB6Ii8+PC9zdmc+"
      },
      {
          name: "VS Code",
          image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
          name: "Postman",
          image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iI0ZGNkMzNyIgZD0iTTI1NC45NTMgMTQ0LjI1M2M4Ljk1OS03MC4xMzEtNDAuNTY5LTEzNC4yNDgtMTEwLjU3Mi0xNDMuMjA2Qzc0LjM3OC03LjkxMiAxMC4wMDUgNDEuNjE2IDEuMDQ3IDExMS42MTljLTguOTU5IDcwLjAwMyA0MC41NjkgMTM0LjI0OCAxMTAuNTcyIDE0My4zMzRjNzAuMTMxIDguOTU5IDEzNC4yNDgtNDAuNTY5IDE0My4zMzQtMTEwLjciLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJtMTc0LjIgODIuMTg0bC01NC4wMDcgNTQuMDA3bC0xNS4yMy0xNS4yM2M1My4xMTEtNTMuMTEgNTguMzU4LTQ4LjUwMyA2OS4yMzYtMzguNzc3Ii8+PHBhdGggZmlsbD0iI0ZGNkMzNyIgZD0iTTEyMC4xOTMgMTM3LjQ3Yy0uMzg0IDAtLjY0LS4xMjgtLjg5Ni0uMzg0bC0xNS4zNTctMTUuMjI5YTEuMjM3IDEuMjM3IDAgMCAxIDAtMS43OTFjNTQuMDA2LTU0LjAwNyA1OS42MzctNDguODg4IDcxLjAyNy0zOC42NWMuMjU2LjI1Ni4zODQuNTEyLjM4NC44OTZzLS4xMjguNjQtLjM4NC44OTZsLTU0LjAwNiA1My44NzhjLS4xMjguMjU2LS41MTIuMzg0LS43NjguMzg0bS0xMy40MzctMTYuNTA5bDEzLjQzNyAxMy40MzhsNTIuMDg3LTUyLjA4N2MtOS40Ny04LjQ0Ni0xNS44Ny0xMS4wMDYtNjUuNTI0IDM4LjY1Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0ibTEzNS42NzggMTUxLjY3NmwtMTQuNzE3LTE0LjcxOGw1NC4wMDYtNTQuMDA2YzE0LjQ2MiAxNC41OS03LjE2NiAzOC4yNjUtMzkuMjg5IDY4LjcyNCIvPjxwYXRoIGZpbGw9IiNGRjZDMzciIGQ9Ik0xMzUuNjc4IDE1Mi45NTZjLS4zODQgMC0uNjQtLjEyOC0uODk1LS4zODRsLTE0LjcxOC0xNC43MThjLS4yNTYtLjI1Ni0uMjU2LS41MTItLjI1Ni0uODk2YzAtLjM4My4xMjgtLjY0LjM4NC0uODk1TDE3NC4yIDgyLjA1NmExLjIzNyAxLjIzNyAwIDAgMSAxLjc5MiAwYTE1LjU4IDE1LjU4IDAgMCAxIDQuOTkxIDExLjkwMmMtLjI1NiAxNC4yMDYtMTYuMzggMzIuMjUtNDQuMjggNTguNjE0Yy0uMzg0LjI1Ni0uNzY4LjM4NC0xLjAyNC4zODRtLTEyLjkyNS0xNS45OThjOC4xOSA4LjMxOSAxMS42NDYgMTEuNjQ2IDEyLjkyNSAxMi45MjZjMjEuNS0yMC40NzYgNDIuMzYtNDEuNDY0IDQyLjQ4OS01NS45MjZjLjEyOC0zLjMyNy0xLjE1Mi02LjY1NS0zLjMyOC05LjIxNHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJtMTA1LjIyIDEyMS4zNDVsMTAuODc4IDEwLjg3OGMuMjU2LjI1Ni4yNTYuNTEyIDAgLjc2OGMtLjEyOC4xMjgtLjEyOC4xMjgtLjI1Ni4xMjhsLTIyLjUyNCA0Ljg2M2MtMS4xNTIuMTI4LTIuMTc2LS42NC0yLjQzMi0xLjc5MWMtLjEyOC0uNjQuMTI4LTEuMjguNTEyLTEuNjY0bDEzLjA1NC0xMy4wNTRjLjI1Ni0uMjU2LjY0LS4zODQuNzY4LS4xMjgiLz48cGF0aCBmaWxsPSIjRkY2QzM3IiBkPSJNOTIuOTM0IDEzOS4yNjJjLTEuOTIgMC0zLjMyNy0xLjUzNi0zLjMyNy0zLjQ1NWMwLS44OTYuMzg0LTEuNzkyIDEuMDI0LTIuNDMybDEzLjA1My0xMy4wNTRjLjc2OC0uNjQgMS43OTItLjY0IDIuNTYgMGwxMC44NzggMTAuODc4Yy43NjguNjQuNzY4IDEuNzkyIDAgMi41NmMtLjI1Ni4yNTYtLjUxMi4zODQtLjg5Ni41MTJsLTIyLjUyNCA0Ljg2M2MtLjI1NiAwLS41MTIuMTI4LS43NjguMTI4bTExLjkwMi0xNi41MDlsLTEyLjU0MiAxMi41NDJjLS4yNTYuMjU2LS4zODQuNjQtLjEyOCAxLjAyNGMuMTI4LjM4NC41MTIuNTExLjg5Ni4zODRsMjEuMTE2LTQuNjA4eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMDIuNzM4IDUyLjIzOGMtOC4xOS03LjkzNS0yMS4zNzItNy42NzktMjkuMzA2LjY0Yy03LjkzNSA4LjMxOC03LjY3OSAyMS4zNzIuNjQgMjkuMzA2QTIwLjY3OCAyMC42NzggMCAwIDAgMTk5LjE1NCA4NWwtMTQuNTktMTQuNTl6Ii8+PHBhdGggZmlsbD0iI0ZGNkMzNyIgZD0iTTE4OC40MDUgODkuMjIzYy0xMi4xNTggMC0yMi4wMTItOS44NTQtMjIuMDEyLTIyLjAxMmMwLTEyLjE1OCA5Ljg1NC0yMi4wMTIgMjIuMDEyLTIyLjAxMmM1LjYzIDAgMTEuMTM0IDIuMTc2IDE1LjIzIDYuMTQzYy4yNTUuMjU2LjM4My41MTIuMzgzLjg5NnMtLjEyOC42NC0uMzg0Ljg5NkwxODYuMzU3IDcwLjQxbDEzLjU2NiAxMy41NjZjLjUxMi41MTIuNTEyIDEuMjggMCAxLjc5MmwtLjI1Ni4yNTZjLTMuMzI4IDIuMDQ3LTcuMjk1IDMuMi0xMS4yNjIgMy4ybTAtNDEuMzM2Yy0xMC43NSAwLTE5LjQ1MyA4LjcwMi0xOS4zMjUgMTkuNDUyYzAgMTAuNzUgOC43MDMgMTkuNDUzIDE5LjQ1MyAxOS4zMjVjMi45NDMgMCA1Ljg4Ny0uNjQgOC41NzQtMi4wNDhsLTEzLjQzNy0xMy4zMWMtLjI1Ni0uMjU2LS4zODQtLjUxMi0uMzg0LS44OTZjMC0uMzgzLjEyOC0uNjQuMzg0LS44OTVsMTcuMTQ5LTE3LjE1Yy0zLjQ1Ni0yLjk0My03LjgwNy00LjQ3OC0xMi40MTQtNC40NzgiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJtMjAzLjEyMiA1Mi42MjJsLS4yNTYtLjI1NmwtMTguMyAxOC4wNDRsMTQuNDYxIDE0LjQ2MmMxLjQwOC0uODk2IDIuODE1LTEuOTIgMy45NjctMy4wNzJhMjAuNTEgMjAuNTEgMCAwIDAgLjEyOC0yOS4xNzgiLz48cGF0aCBmaWxsPSIjRkY2QzM3IiBkPSJNMTk5LjE1NSA4Ni4yOGMtLjM4NCAwLS42NC0uMTI4LS44OTYtLjM4NGwtMTQuNTktMTQuNTljLS4yNTUtLjI1Ni0uMzgzLS41MTItLjM4My0uODk2YzAtLjM4My4xMjgtLjY0LjM4NC0uODk1bDE4LjE3Mi0xOC4xNzNhMS4yMzcgMS4yMzcgMCAwIDEgMS43OTIgMGwuMzg0LjI1NmM4LjU3NSA4LjU3NCA4LjU3NSAyMi4zOTYuMTI4IDMxLjA5OGMtMS4yOCAxLjI4LTIuNjg3IDIuNDMyLTQuMjIzIDMuMzI4Yy0uMzg0LjEyOC0uNjQuMjU2LS43NjguMjU2bS0xMi43OTgtMTUuODdsMTIuOTI2IDEyLjkyNmMxLjAyNC0uNjQgMi4wNDgtMS41MzYgMi44MTUtMi4zMDNjNy4yOTUtNy4yOTUgNy42NzktMTkuMTk3LjY0LTI2Ljg3NnoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTc2LjM3NSA4NC40ODhhNy44NzkgNy44NzkgMCAwIDAtMTEuMTM0IDBsLTQ4LjI0NyA0OC4yNDdsOC4wNjIgOC4wNjNsNTEuMDYzLTQ0Ljc5MmMzLjMyOC0yLjgxNiAzLjU4My03LjgwNy43NjgtMTEuMTM0Yy0uMjU2LS4xMjgtLjM4NC0uMjU2LS41MTItLjM4NCIvPjxwYXRoIGZpbGw9IiNGRjZDMzciIGQ9Ik0xMjQuOTI4IDE0Mi4wNzhjLS4zODQgMC0uNjQtLjEyOC0uODk2LS4zODRsLTguMDYyLTguMDYzYTEuMjM3IDEuMjM3IDAgMCAxIDAtMS43OTJsNDguMjQ3LTQ4LjI0N2E5LjExNSA5LjExNSAwIDAgMSAxMi45MjYgMGE5LjExNSA5LjExNSAwIDAgMSAwIDEyLjkyNmwtLjM4NC4zODRsLTUxLjA2MyA0NC43OTJjLS4xMjguMjU2LS4zODQuMzg0LS43NjguMzg0bS02LjE0My05LjM0M2w2LjI3MSA2LjI3MWw1MC4xNjctNDQuMDI0YzIuODE2LTIuMzA0IDMuMDcyLTYuNTI3Ljc2OC05LjM0MmMtMi4zMDMtMi44MTYtNi41MjctMy4wNzItOS4zNDItLjc2OGMtLjEyOC4xMjgtLjI1Ni4yNTYtLjUxMi4zODR6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTgwLjAwOCAxODcuNjM3Yy0uNTExLjI1Ni0uNzY3Ljc2OC0uNjQgMS4yOGwyLjE3NiA5LjIxNGMuNTEyIDEuMjgtLjI1NiAyLjgxNi0xLjY2NCAzLjJjLTEuMDIzLjM4NC0yLjE3NSAwLTIuODE1LS43NjhsLTE0LjA3OC0xMy45NWw0NS45NDQtNDUuOTQzbDE1Ljg3LjI1NmwxMC43NSAxMC43NWMtMi41NiAyLjE3NS0xOC4wNDUgMTcuMTQ5LTU1LjU0MyAzNS45NjEiLz48cGF0aCBmaWxsPSIjRkY2QzM3IiBkPSJNNzguOTg1IDIwMi42MWMtMS4wMjQgMC0yLjA0OC0uMzgzLTIuNjg4LTEuMTUxbC0xMy45NS0xMy45NWMtLjI1NS0uMjU2LS4zODMtLjUxMi0uMzgzLS44OTVjMC0uMzg0LjEyOC0uNjQuMzg0LS44OTZsNDUuOTQzLTQ1Ljk0NGMuMjU2LS4yNTYuNjQtLjM4NC44OTYtLjM4NGwxNS44Ny4yNTZjLjM4MyAwIC42NC4xMjguODk1LjM4NGwxMC43NSAxMC43NWMuMjU2LjI1Ni4zODQuNjQuMzg0IDEuMDI0cy0uMTI4LjY0LS41MTIuODk2bC0uODk2Ljc2N2MtMTMuNTY1IDExLjkwMi0zMS45OTQgMjMuODA0LTU0LjkwMiAzNS4xOTRsMi4xNzYgOS4wODdjLjM4NCAxLjY2My0uMzg0IDMuNDU1LTEuOTIgNC4zNWMtLjc2OC4zODUtMS40MDguNTEzLTIuMDQ3LjUxM20tMTQuMDc4LTE1Ljk5NmwxMy4xODIgMTMuMDUzYy4zODQuNjQgMS4xNTIuODk2IDEuNzkxLjUxMmMuNjQtLjM4NC44OTYtMS4xNTIuNTEyLTEuNzkybC0yLjE3NS05LjIxNGMtLjI1Ni0xLjE1Mi4yNTYtMi4xNzYgMS4yOC0yLjY4N2MyMi42NTEtMTEuMzkgNDAuOTUyLTIzLjE2NCA1NC4zOS0zNC44MWwtOS40Ny05LjQ3bC0xNC43MTgtLjI1NnoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJtNTIuMTEgMTk3LjYybDExLjAwNS0xMS4wMDZsMTYuMzgyIDE2LjM4bC0yNi4xMDgtMS43OTFjLTEuMTUyLS4xMjgtMS45Mi0xLjE1Mi0xLjc5MS0yLjMwNGMwLS41MTIuMTI4LTEuMDI0LjUxMS0xLjI4Ii8+PHBhdGggZmlsbD0iI0ZGNkMzNyIgZD0ibTc5LjQ5NyAyMDQuMTQ2bC0yNi4yMzYtMS43OTFjLTEuOTItLjEyOC0zLjItMS43OTItMy4wNzEtMy43MTJjLjEyOC0uNzY4LjM4NC0xLjUzNSAxLjAyNC0yLjA0N0w2Mi4yMiAxODUuNTlhMS4yMzcgMS4yMzcgMCAwIDEgMS43OTEgMGwxNi4zODEgMTYuMzhjLjM4NC4zODUuNTEyLjg5Ny4yNTYgMS40MDhjLS4yNTYuNTEyLS42NC43NjgtMS4xNTEuNzY4bS0xNi4zODItMTUuNzRsLTEwLjExIDEwLjExYy0uMzg0LjI1NS0uMzg0Ljg5NSAwIDEuMTUxYy4xMjguMTI4LjI1Ni4yNTYuNTEyLjI1NmwyMi42NTIgMS41MzZ6bTQxLjMzNy00MS44NDljLS43NjggMC0xLjI4LS42NC0xLjI4LTEuMjhjMC0uMzg0LjEyOC0uNjQuMzg0LS44OTZsMTIuNDE0LTEyLjQxNGExLjIzNyAxLjIzNyAwIDAgMSAxLjc5MiAwbDguMDYyIDguMDYzYy4zODQuMzg0LjUxMi43NjguMzg0IDEuMjhjLS4xMjguMzg0LS41MTIuNzY4LTEuMDI0Ljg5NmwtMjAuNDc2IDQuMzV6bTEyLjQxNC0xMS45MDJsLTguNDQ3IDguNDQ2bDEzLjgyMi0yLjk0M3oiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJtMTI0LjggMTQwLjkyNmwtMTQuMDc3IDMuMDcxYy0xLjAyNC4yNTYtMi4wNDgtLjM4NC0yLjMwNC0xLjQwOGMtLjEyOC0uNjQgMC0xLjI4LjUxMi0xLjc5MWw3LjgwNy03LjgwN3oiLz48cGF0aCBmaWxsPSIjRkY2QzM3IiBkPSJNMTEwLjQ2NyAxNDUuMjc3YTMuMTY4IDMuMTY4IDAgMCAxLTMuMi0zLjJjMC0uODk1LjM4NC0xLjY2My44OTYtMi4zMDNsNy44MDctNy44MDdhMS4yMzcgMS4yMzcgMCAwIDEgMS43OTIgMGw4LjA2MiA4LjA2M2MuMzg0LjM4NC41MTIuNzY4LjM4NCAxLjI4Yy0uMTI4LjM4NC0uNTEyLjc2OC0xLjAyNC44OTZsLTE0LjA3NyAzLjA3MXptNi4zOTktMTAuNjIybC02LjkxMSA2LjkxYy0uMjU2LjI1Ny0uMjU2LjUxMy0uMTI4Ljc2OGMuMTI4LjI1Ni4zODQuMzg0Ljc2OC4zODRsMTEuNzc0LTIuNTZ6bTg2LjM4NC02OS43NDhjLS4yNTYtLjc2Ny0xLjE1Mi0xLjE1MS0xLjkyLS44OTVjLS43NjcuMjU2LTEuMTUxIDEuMTUxLS44OTUgMS45MmMwIC4xMjcuMTI4LjI1NS4xMjguMzgzYy43NjggMS41MzYuNTEyIDMuNDU2LS41MTIgNC44NjNjLS41MTIuNjQtLjM4NCAxLjUzNi4xMjggMi4wNDhjLjY0LjUxMiAxLjUzNS4zODQgMi4wNDctLjI1NmMxLjkyLTIuNDMyIDIuMzA0LTUuNTAzIDEuMDI0LTguMDYzIi8+PC9zdmc+",
      },
      ],
  },
];
  
export const experiences = [
  {
      id: 0,
      img: "https://media.licdn.com/dms/image/C4D0BAQGoo0Uq0tl1Sg/company-logo_100_100/0/1631303606300?e=1713398400&v=beta&t=tuRKO0b5ya3CBCXqBrpa9PpOT2xnNx9EOLgTISu72Nc",
      role: "Laravel Developer",
      company: "Phoeniixx Designs",
      date: "July 2023 - Present",
      desc: "Working on the frontend of the web application using Vuejs, and Material UI., and Backend development and Api creations",
      skills: [
      "ReactJS",
      "Vuejs",
      "Material UI",
      "HTML",
      "CSS",
      "Tailwind Css",
      "JavaScript",
      "TypeScript",
      "Payment gateways",
      "Docker And Aws"
      ],
  },
  {
      id: 1,
      img: "https://media.licdn.com/dms/image/C4D0BAQFOqOH6xI8E4g/company-logo_100_100/0/1656050069211/einix_infotech_private_limited_logo?e=1713398400&v=beta&t=JidStb6JBlkonQLaSiV7qRHfi9fbXSuYnZD5XiBLsZg",
      role: "Full Stack Developer",
      company: "EINIX INFOTECH PRIVATE LIMITED",
      date: "Feb 2023 - May 2023",
      desc: "Contributing to different open-source projects and learn from industry experts. and working on different new technology integrations",
      skills: [
        "Laravel",
        "Html",
        "Css",
        "Sass",
        "Javascript",
        "Ajax"
        ],
  },
  {
      id: 2,
      img: "https://letsgrowmore.in/wp-content/uploads/2021/05/Artboard-1-1-removebg-preview-e1645900071758.jpg",
      role: "Front End developer Intern",
      company: "Lets Grow more",
      date: "Sep 2022 - Oct 2022",
      desc: "As a Laravel developer at the Lets Grow More(LGM)), I have had the opportunity to work on exciting projects of web Apps creation.",
      skills: [
      "Web Application Development",
      "Html",
      "Css",
      "Javascript",
      "Php"
      ],
  },
];
  
export const education = [
{
    id: 0,
    img: "https://media.licdn.com/dms/image/D4D0BAQF8X3Gg0fmacw/company-logo_100_100/0/1687891685015?e=1713398400&v=beta&t=DtgrROeNZ5Hd_ENm4YW2jy-hwePbztiEX06WrGaUh6Q",
    school: "Gurugram University, Gurugram",
    date: "2018 - 2022",
    grade: "72%",
    desc: "I had completed a Bachelor's degree in Computer Science and Engineering at Gurugram University, Gurugram",
    degree: "Bachelor of Technology - BTech, Computer Science Engineering",
},
{
    id: 1,
    img: "https://d3bat55ebwjhsf.cloudfront.net/schools/logos/user_generic_school_user/99e44911-3497-4cae-b00c-a015d9dbccd9-cb9c14dc-4b_FQcoV8F.webp",
    school: "Shanti Niektan Public School, Gurugran",
    date: "Apr 2017 - Apr 2018",
    grade: "88.2%",
    desc: "I completed my class 12 high school education at Shanti Niketan Public School, Gurugram, where I studied Science with Computer Science.",
    degree: "CBSE(XII), Science with Computer",
},
{
    id: 2,
    img: "https://d3bat55ebwjhsf.cloudfront.net/schools/logos/user_generic_school_user/99e44911-3497-4cae-b00c-a015d9dbccd9-cb9c14dc-4b_FQcoV8F.webp",
    school: "Shanti Niketan Public School, Gurugram",
    date: "Apr 2015 - Apr 2016",
    grade: "95%",
    desc: "I completed my class 10 education at Shanti Niketan Public School, Gurugram",
    degree: "CBSE(X)",
},
];
  
export const projects = [
    {
      id: 9,
      title: "Trackify",
      date: "Jun 2023 - Jul 2023",
      description:
        "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
      image:
        "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
      tags: [
        "Docker",
        "AWS",
        "DuckDNS",
        "Eslint",
        "Husky",
        "CI/CD",
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/Trackify",
      webapp: "https://trackify.duckdns.org",
    },
    {
      id: 0,
      title: "Podstream",
      date: "Apr 2023 - May 2023",
      description:
        "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
      image:
        "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
      tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
      category: "web app",
      github: "https://github.com/rishavchanda/Podstream",
      webapp: "https://podstream.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 1,
      title: "Vexa",
      date: "Oct 2022 - Present",
      description:
        "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
      image:
        "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
      tags: [
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
        "NodeMailer",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/Project-Management-App",
      webapp: "https://vexa-app.netlify.app/",
    },
    {
      id: 2,
      title: "Brain Tumor Detection",
      date: "Jan 2023 - Mar 2023",
      description:
        "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
      image:
        "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "machine learning",
      github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
      webapp: "https://brain-tumor.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 3,
      title: "Buckoid",
      date: "Dec 2021 - Apr 2022",
      description:
        "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
      image:
        "https://camo.githubusercontent.com/fbf405040ae86b5d4a40f24e4ac034982cb8c0e2d850560ba64527997b258be8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
      tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
      category: "android app",
      github: "https://github.com/rishavchanda/Buckoid-Android-App",
      webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
    },
    {
      id: 10,
      title: "Job Finding App",
      date: "Jun 2023 - Jul 2023",
      description:
        "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
      image:
        "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
      tags: ["React Native", "JavaScript", "Axios"],
      category: "android app",
      github: "https://github.com/rishavchanda/Job-finder-App",
      webapp: "https://github.com/rishavchanda/Job-finder-App",
    },
    {
      id: 4,
      title: "Whatsapp Clone",
      date: "Jul 2021",
      description:
        "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
      tags: ["React Js", "Firebase", "Firestore", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
      webapp: "https://whatsapp-clone-rishav.web.app",
    },
    {
      id: 5,
      title: "Todo Web App",
      date: "Jun 2021",
      description:
        " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
      image:
        "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
      tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Todo-Web-App",
      webapp: "https://rishav-react-todo.netlify.app/",
    },
    {
      id: 6,
      title: "Breaking Bad",
      date: "Jun 2021",
      description:
        "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
      image:
        "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
      tags: ["React Js", "API", "Axios", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Breaking-Bad",
      webapp: "https://breaking-bad-webapp.netlify.app",
    },
    {
      id: 7,
      title: "Quiz App",
      date: "Dec 2020 - Jan 2021",
      description:
        "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
      tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
      category: "android app",
      github: "https://github.com/rishavchanda/Quiz-Earn",
      webapp: "https://github.com/rishavchanda/Quiz-Earn",
    },
    {
      id: 8,
      title: "Face Recognition",
      date: "Jan 2021",
      description:
        "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
      image:
        "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "machine learning",
      github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
      webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    },
];
  
export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
];