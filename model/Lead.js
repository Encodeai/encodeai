import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', LeadSchema);
