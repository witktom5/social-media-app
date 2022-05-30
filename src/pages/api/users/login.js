import connectDB from '../../../../middleware/mongodb';
import bcrypt from 'bcrypt';
import User from '../../../../models/user';
import { jsonwebtoken as jwt } from 'jsonwebtoken';

//  Login user

const handler = async (req, res) => {
  if (req.method === 'GET') {
  } else {
    res.status(400).json('Request method not supported');
  }
};

export default connectDB(handler);
