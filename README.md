# GLog Frontend

This is an opportunity to learn how to use TypeScript with React.

I started by creating the `NavBar.tsx` and and using `useState` in `App.tsx` to desinge the user. The documentation on doing this and ensuring no TypeScript errors is not the most accessible! It took fine tuning to ensure that both the `user` and the `setUser` part of this function were typed correctly in the parent `App.jsx` file, but also in the child `NavBar.tsx` file once they had been passed down as props.