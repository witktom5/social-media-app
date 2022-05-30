import connectDB from '../../../../middleware/mongodb';
import bcrypt from 'bcrypt';
import User from '../../../../models/user';
import { generateToken } from '../../../../utils/generateToken';

//  Login user

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      // Check password
      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json('Invalid email or password');
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  } else {
    res.status(400).json('Request method not supported');
  }
};

export default connectDB(handler);
