import connectDB from '../../../../middleware/mongodb';
import bcrypt from 'bcrypt';
import User from '../../../../models/user';
import { generateToken } from '../../../../utils/generateToken';

//  Register a new user

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    try {
      // Find if user already exists

      const userExists = await User.findOne({ email });
      if (userExists) {
        const message = 'User already exists';
        return res.status(400).json(message);
      }

      //  Email validation

      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(regexEmail)) {
        const message = 'Invalid email';
        return res.status(400).json(message);
      }

      //  Password validation (8 chars, 1 lower 1 upper 1 number and special character)

      const regexPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

      if (!password.match(regexPassword)) {
        const message =
          'Password must be between 8 and 20 characters, 1 lowercase, 1 uppercase, 1 number and a special character';
        return res.status(400).json(message);
      }

      // Hash password to store it in DB

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create new user
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      if (user) {
        return res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        return res.status(400).json('Invalid user data');
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
