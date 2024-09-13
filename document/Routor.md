# 🤞 How to use Routor in React ?

### In react we use routor for navigate to another page or tab, so it is useful for developer must be to know about it.

Go to [Routor dom]("https://reactrouter.com/en/main/start/tutorial") and Read documentaton to know about it more.

## Let's start with me

- If you don't have a react project you can create it.[document](./Installation.md) and after this follow this step
  - Write this commend to you project
    - `npm install react-router-dom`
  - and then this commed
    - `npm install localforage match-sorter sort-by`
  - after run this two commend you must be copy this code to you `main.jsx` or file that you rander `root` id from index.html
    - ```javascript
      import { createBrowserRouter, RouterProvider } from "react-router-dom";
      const router = createBrowserRouter([
        {
          path: "/",
          element: <div>Hello world!</div>,
        },
      ]);
      ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      );
      ```
      and you can create path and element for it.
  - for this sample we can create a routor dom but we should create a layout that have Navbar and footer in one component.
