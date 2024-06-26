import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISelectedContact {
  contact_id: string;
  contact_name: string;
  contact_image: string;
}

interface ContactSate {
  selectedContact: ISelectedContact | null;
}
const initialState: ContactSate = {
  selectedContact: null,
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
      setSelectedContact(state, action: PayloadAction<ISelectedContact | null>) {
        state.selectedContact = action.payload;    },
  },
});

export const {setSelectedContact } = contactSlice.actions;
export default contactSlice.reducer;
