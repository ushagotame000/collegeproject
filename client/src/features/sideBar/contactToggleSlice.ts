import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
interface contactSate {
  showContacts: boolean;
}

const initialState: contactSate={
  showContacts: true,
};

const contactsToggleSlice = createSlice({
  name:"contactsToggle",
  initialState,
  reducers: {
    toggleContacts(state) {
      state.showContacts = !state.showContacts;
      },
      },
});

export const {toggleContacts} = contactsToggleSlice.actions;
export const selectShowContact = (state: RootState) => state.contactBar.showContacts;

export default contactsToggleSlice.reducer;