import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatingPhoto.scss';

const CreatingPhoto = () => {
    const navigate = useNavigate();

    return (
        <div className="waitingBlobPage">
            {/* Integrate Sasha's waiting page here */}
            <div className="waitingBlob">
                <div className="waitingBlob__circle">
                    <div className="waitingBlob__inner">
                        <h1 className="waitingBlob__title">ALL SELECTIONS ARE IN!</h1>
                        <div className="waitingBlob__body">
                            <p>
                                We are now blending the group's one perfect memory......
                            </p>
                            <p>
                                This takes a moment, just like all good things do. Why not grab a glass of water or stretch while we work our magic?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatingPhoto;
