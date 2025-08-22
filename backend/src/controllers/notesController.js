export const getAllNotes = (req, res) => {
  res.status(200).send("You got fetched the notes");
};

export const createNote = (req, res) => {
  res.status(200).send("You got 10 notes");
};

export const updateNote = (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
};
