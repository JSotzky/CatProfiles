import React from 'react';

function catprofile() {
  return <div className='catprofile'>
            <h1 className='catprofile--names'>Petey and Patches</h1>
            <h2 className= 'catprofile--description'>Approx. 6 months, Bonded Pair, Male & Female, Very Playful, Snuggly, Shy, Curiois, and Sweet</h2>
            <h4 className='catprofile--rescue'>Help our Rescue! www.felinecafeottawa.com</h4>
            <img src="" alt="Cat profile pic"></img>
            <h3 className='catprofile--generalcare'>General care & Profile status:</h3>
            <p className='catprofile--specialneeds'>Special Needs: none</p>
            <p className='catprofile--adoptionfee'>Adoption fee: To be determined</p>
            <div className='catprofile--gird'>
                <div className='checkmark-1'>Yes</div><div className='healthexam'>Health Exam</div>
                <div className='checkmark-2'>No</div><div className='neauter'>Neauter/Spay</div>
                <div className='checkmark-3'>Yes</div><div className='vaccines'>Vaccines (Rabies & FVRCP)</div>
                <div className='checkmark-4'>No</div><div className='flea'>Flea treatment</div>
                <div className='checkmark-5'>Yes</div><div className='dewormed'>Dewormed</div>
                <div className='checkmark-6'>No</div><div className='microchip'>Microchip</div>
                <div className='checkmark-7'>Yes</div><div className='fiv'>FIV Tested</div>
                <div className='checkmark-8'>Yes</div><div className='felv'>FELV Tested</div>
            </div>
            
            <footer>If you are able to donate to help out these little felines, you can click the donate button located on this page or send an e-transfer to felinecafefoundation@gmail.com</footer>
        </div>;
}

export default catprofile;
