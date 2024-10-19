import { TypeAnimation } from 'react-type-animation';
import '../cssFiles/section1.css';
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

import java from '../../assets/programming_language/java.png';
import react from '../../assets/programming_language/react.png';
import flutter from '../../assets/programming_language/flutter.png';
import unity from '../../assets/programming_language/unity.png';
import kotlin from '../../assets/programming_language/kotlin.png';
import python from '../../assets/programming_language/python.png';
import csharp from '../../assets/programming_language/c-sharp.png';
import as from '../../assets/programming_language/android-studio.png';
import vs from '../../assets/programming_language/visual-studio.png';
import firebase from '../../assets/programming_language/firebase.png';
import vsc from '../../assets/programming_language/visual-studio-code.png';
import html from '../../assets/programming_language/html.png';
import css from '../../assets/programming_language/css.png';

const initialItems = [
  'JAVA', 'React', 'Flutter', 'Unity', 'Kotlin', 'Python', 'C#',
  'Android Studio', 'Visual Studio', 'Firebase',
  'Visual Studio Code', 'HTML', 'CSS'
];
const images = {
  'JAVA': java,
  'React': react,
  'Flutter': flutter,
  'Unity': unity,
  'Kotlin': kotlin,
  'Python': python,
  'C#': csharp,
  'Android Studio': as,
  'Visual Studio': vs,
  'Firebase': firebase,
  'Visual Studio Code': vsc,
  'HTML': html,
  'CSS': css
};

const Section1 = () => {

    const [items, setItems] = useState(initialItems.slice(0, 6));
    const [initialItemsIndex, setInitialItemsIndex] = useState(6);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (items.length > 0) {
          const [itemToMove] = items;
          setItems((prevItems) => {
            const updatedItems = prevItems.slice(1);
            const nextItem = initialItemsIndex >= initialItems.length 
              ? initialItems[0] 
              : initialItems[initialItemsIndex];
            return [...updatedItems, nextItem];
          });
          setInitialItemsIndex((prevIndex) => 
            prevIndex >= initialItems.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 3000); 
      return () => clearInterval(interval);
    }, [items, initialItemsIndex]);
  

    return (
    <div className='background'>
      <div className='container1'>
        <div className='borderImg'>
          <div className='profileImg'></div>
        </div>
        <div className='hellotext'>
          <Typography className='hello'>Hello World! My name is </Typography>
          <Typography className='name'> Rugved Apraj</Typography>
          <Typography className='hello'> .</Typography>
        </div>
        <Typography className='professiontext'>
        <TypeAnimation
            sequence={[
              'Android Developer', 1000,
              'Web Developer', 1000,
              'Game Developer', 1000,
              'Flutter Developer', 1000,
              'Unity Developer', 1000,
              'Full Stack Developer', 1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </Typography>
        <Typography className='abouttext'>Passionate software developer with expertise in Java, Flutter, React, and Unity. Experienced in mobile app and game development, delivering innovative and high-quality solutions.</Typography>
      </div>
      <div className='container2'>
      {items.map((item, index) => (
        <div key={index} className='items'>
          <img src={images[item]} alt={item} />
          <Typography className='item-text'>{item}</Typography>
        </div>
        ))}
      </div>
    </div>
    );
};
 
export default Section1;