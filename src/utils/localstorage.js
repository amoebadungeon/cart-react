// localStorage.js

// Function to save state to local storage
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Handle write errors here, if necessary
      console.error("Could not save state", err);
    }
  };
  
  // Function to load state from local storage
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined; // No state saved in local storage
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined; // In case of errors, let Redux initialize the state normally
    }
  };
  