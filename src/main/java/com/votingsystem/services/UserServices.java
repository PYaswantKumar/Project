package com.votingsystem.services;

import com.votingsystem.Dto.LoginDTO;
import com.votingsystem.Dto.UserDTO;

public interface UserServices {

	String addUser(UserDTO userDTO);

	LoginMessage loginUser(LoginDTO loginDTO);


}
