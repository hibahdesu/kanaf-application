import React, { useState } from 'react';
import '../styles/UploadPhotos.css';
import Title from '../components/Title';
import ButtonTwo from '../components/ButtonTwo';

const ImageUpload = () => {
    const [photos, setPhotos] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setPhotos((prevPhotos) => [...prevPhotos, ...files]);
    };

    const analyzeImages = async (images) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(images.map((image) => ({
                    name: image.name,
                    result: Math.random() > 0.5 ? 'صحي' : 'تم اكتشاف مرض',
                })));
            }, 1000); // Simulate a delay
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (photos.length < 3) {
            alert("يرجى تحميل 3 صور على الأقل.");
            return;
        }

        setLoading(true);
        setResults([]);

        const newResults = await analyzeImages(photos);
        setResults(newResults);
        setLoading(false);
    };

    return (
        <div className='image-upload-full-container'>
            <Title title="رفع الصور" />
            <div className="image-upload-container"> 
                <div className="result-section">
                    <Title title='النتائج' />
                    {loading && <p className="loading">يتم التحليل...</p>}

                    {results.length > 0 && (
                        <div className="results">
                            <ul>
                                {results.map((result, index) => (
                                    <li key={index}>
                                        الصورة: {result.name}, النتيجة: {result.result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="upload-area">
                    <div className="dotted-border">
                        <form onSubmit={handleSubmit} className="upload-form">
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                id="fileInput"
                                accept="image/*"
                            />

                            <div className='upload-texts'>
                                <div className="upload-icon-small-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="upload-icon-small">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="uploaded-images">
                                    {photos.map((photo, index) => (
                                        <img key={index} src={URL.createObjectURL(photo)} alt={`تم تحميل ${index + 1}`} className="uploaded-image" />
                                    ))}
                                </div>
                                <label htmlFor="fileInput" className="upload-button">رفع الصور أو سحب وإفلاتها</label>
                                <p className="upload-min-photos">+ أضف 3 صور على الأقل</p>
                            </div>
                        </form>
                    </div>

                    {/* Replace the button with ButtonTwo */}
                    <ButtonTwo 
                        className="analyze-button" 
                        type="button" 
                        onClick={handleSubmit} 
                        disabled={photos.length < 3 || loading}
                    >
                        {loading ? "يتم التحليل..." : "تحليل"}
                    </ButtonTwo>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;