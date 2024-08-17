import React, { useState } from 'react';
import '../Buzzbee/buzzbee2.css'; // Import your CSS file for styling
import buzz1 from '../../assets/buzz1.png'; // Import your image files
import buzz2 from '../../assets/buzz2.png';
import buzz3 from '../../assets/buzz3.png';

export const Buzzbee2 = () => {

    const [imageName, setImageName] = useState('');

    const displayImageName = (name) => {
        setImageName(name);
    };

    const clearImageName = () => {
        setImageName('');
    };


    return (
        <div className='buzz-com2' id='buzzbeecomponent'>

            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                <div
                    className="imgcontainer w-25"
                    onMouseOver={() => displayImageName('Design')}
                    onMouseOut={clearImageName}
                >
                    <img src={buzz1} alt="Design_image" className="buzzImg img-fluid w-100" />
                </div>
                <div
                    className="imgcontainer w-25"
                    onMouseOver={() => displayImageName('Inspired Branding')}
                    onMouseOut={clearImageName}
                >
                    <img src={buzz2} alt="Branding_image" className="buzzImg img-fluid w-100" />
                </div>
                <div
                    className="imgcontainer w-25"
                    onMouseOver={() => displayImageName('Advertisement')}
                    onMouseOut={clearImageName}
                >
                    <img src={buzz3} alt="Advertisement_image" className="buzzImg img-fluid w-100" />
                </div>
                <div className="w-25">
                    <div id="image-names" className='w-100 d-flex justify-content-center align-items-center'>{imageName}</div>
                </div>
            </div>

        </div>
    )
}

