import noteModel from "../models/noteModel.js";


export const getNotes = async (req, res) => {
  try {
    const userId = req.user._id;
    const notes = await noteModel.find({ user: userId }).sort({ createdAt: -1 });
    res.json({ success: true, notes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const createNote = async (req, res) => {
    try {
      const { content } = req.body; 
  
      
      if (!content) {
        return res.status(400).json({ success: false, message: 'Content is required' });
      }
  
      
      const newNote = new noteModel({
        user: req.body.userId, 
        content: content,
        dateCreated: new Date(),
      });
  
      
      await newNote.save();
  
      return res.status(201).json({ success: true, note: newNote }); 
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error creating note' });
    }
  };
