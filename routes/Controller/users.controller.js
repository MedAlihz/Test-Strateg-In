
const ValidateUser = require('../Controller/Validation/Users.Validation');
const Users = require('../Model/users.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const blacklist = [];
    const {Firstname,Lastname, Email, Password } = req.body;

        const{errors,isValid}=ValidateUser(req.body)
    try {
        if(!isValid){
            res.status(404).json(errors)
        }else{
            await Users.findOne({Email:req.body.Email})
        .then(async exist=>{
            if(exist){
            errors.Email="User Existe !"
            res.status(404).json(errors)
        }else{
            const hashedPassword = await bcrypt.hash(Password, 10);
            const newUser = new Users({ Firstname, Lastname, Email, Password: hashedPassword });
            await newUser.save();
            res.status(201).json({message:'User Created'})
            
        }
        })  
        }  
    } catch (error) {
        console.log(error.message)
    }
    };

const loginUser = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await Users.findOne({ Email });

    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const token = jwt.sign({ userId: user._id }, 'h7$)s[4C9@7L!KzR3NjE2#m^F');
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({},'Firstname Lastname Email');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
};
