import React, { useState } from 'react';



const requestData = async(url) => {
    
    const baseUrl = `${url}users`
    const response = await fetch(baseUrl)
    const userInfo = await response.json(); 
    return userInfo;
}

export default requestData;