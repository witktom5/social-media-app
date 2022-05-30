import connectDB from '../../../middleware/mongodb';
import bcrypt from 'bcrypt';
import User from '../../../models/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, password } = req.body;
    if (name && email && password) {
      try {
        const user = new User({
          name,
          email,
          password,
        });

        //  Email validation

        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!user.email.match(regexEmail)) {
          const message = 'Invalid email';
          return res.status(400).send(message);
        }

        //  Password validation (8 chars, 1 lower 1 upper 1 number and special character)

        const regexPassword =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (!user.password.match(regexPassword)) {
          const message =
            'Password must be between 8 and 20 characters, 1 lowercase, 1 uppercase, 1 number and a special character';
          return res.status(400).send(message);
        }

        // Hash password to store it in DB

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;

        // Create new user
        const newUser = await user.save();
        return res.status(200).send(newUser);
      } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
      }
    } else {
      res.status(400).send('Data incomplete');
    }
  } else {
    res.status(400).send('Req method not supported');
  }
};

export default connectDB(handler);
