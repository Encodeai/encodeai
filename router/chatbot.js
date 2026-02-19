import express from 'express';
import Lead from '../model/Lead.js';

const router = express.Router();

router.post('/lead', async (req, res) => {
  console.log("------------",req.body);
  
  const { name, mobile, city, email, type } = req.body;

  // Basic validation
  if(!name || !mobile || !city || !email || !type){
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const lead = new Lead({ name, mobile, city, email, type });
    await lead.save();
    res.json({ message: 'Thank you! Our team will contact you shortly.' });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
