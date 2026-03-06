import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, ArrowRight, ArrowLeft } from 'lucide-react';
import './UploadMemories.scss';

const UploadMemories = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [eventName, setEventName] = useState("Sarah's Birthday Brunch");
    const [uploadedPhotos, setUploadedPhotos] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        processFiles(files);
    };

    const processFiles = (files) => {
        const validFiles = files.filter(file => file.type.startsWith('image/'));

        const newPhotos = validFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file),
            file: file
        }));

        setUploadedPhotos(prev => [...prev, ...newPhotos]);
    };

    const handleRemovePhoto = (id, url) => {
        setUploadedPhotos(prev => prev.filter(photo => photo.id !== id));
        URL.revokeObjectURL(url); // Clean up memory
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        processFiles(files);
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="uploadPage">
            <div className="siteContainer">
                <div className="uploadPage__inner">
                    {uploadedPhotos.length > 0 && (
                        <button className="backButton" onClick={() => navigate(-1)}>
                            <ArrowLeft size={18} />
                            <span className="backButton__text">Back</span>
                        </button>
                    )}

                    <header className="sectionHeader">
                        <h1 className="sectionHeader__title">UPLOAD YOUR MEMORIES</h1>
                        <p className="sectionHeader__subtitle">
                            Add all the photos from this moment. Everyone will choose their favorite version.
                        </p>
                    </header>

                    <div className="uploadPage__content">
                        <div className="inputGroup inputGroupCard">
                            <label htmlFor="eventName">Event name/Group name</label>
                            <div className="inputFieldWrapper">
                                <input
                                    type="text"
                                    id="eventName"
                                    value={eventName}
                                    onChange={(e) => setEventName(e.target.value)}
                                    placeholder="e.g. Sarah's Birthday Brunch"
                                />
                            </div>
                        </div>

                        <div
                            className={`dropzone ${isDragging ? 'dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={triggerFileInput}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                multiple
                                accept="image/*"
                                hidden
                            />
                            <div className="dropzone__icon">
                                <Upload size={42} />
                            </div>
                            <h3 className="dropzone__text">Choose images or drag & drop it here.</h3>
                            <p className="dropzone__hint">JPG, JPEG, PNG and WEBP. Max 20 MB</p>
                        </div>

                        {uploadedPhotos.length > 0 && (
                            <>
                                <div className="uploadedSection">
                                    <h4 className="uploadedSection__count">{uploadedPhotos.length} photos uploaded</h4>
                                    <div className="photoGrid">
                                        {uploadedPhotos.map(photo => (
                                            <div key={photo.id} className="photoItem">
                                                <img src={photo.url} alt="Uploaded preview" />
                                                <button
                                                    className="photoItem__remove"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleRemovePhoto(photo.id, photo.url);
                                                    }}
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    className="button continueBtn"
                                    onClick={() => navigate('/select-base-photo')}
                                    disabled={uploadedPhotos.length === 0}
                                >
                                    Continue <ArrowRight size={24} />
                                </button>
                            </>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadMemories;
