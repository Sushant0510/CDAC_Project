package com.app.service;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excs.CustomerHandlingException;
import com.app.custom_excs.ResourceNotFoundException;
import com.app.dao.PropertyRepository;
import com.app.dao.UserRepository;
import com.app.dto.FacilityDetailsDTO;
import com.app.dto.PropertyDetailsDTO;
import com.app.dto.UpdateDTO;
import com.app.pojos.Role;
import com.app.pojos.Users;

@Service
@Transactional
public class UserServiceImpl implements IUserService{
	@Autowired
	private UserRepository userRepo;
    @Autowired
    private PropertyRepository propRepo;
	@Override
	 public Users loginRequest(String email, String password) {
		     
		    		return userRepo.Login(email, password)
		    				.orElseThrow(() -> new CustomerHandlingException("Invalid Credentials!!!!"));		
	}

	@Override
	public Users registerationForm(Users user){
		System.out.println("user info"+user);
		  return  userRepo.save(user);		
	}

	
	@Override
	public List<PropertyDetailsDTO> getAllProperty() {
		return propRepo.getAllPropertList();
	}

	@Override
	public FacilityDetailsDTO getPropertyFacilities(int propid) {
		 return propRepo.getFacilityDetails(propid);
	}




}