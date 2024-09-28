import React, { useState } from 'react';
import '../styles/Application.css';
import Title from '../components/Title'; 
import Text from '../components/Text';
import Button from '../components/Button';

const Application = () => {
    const [photos, setPhotos] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlePhotoChange = (event) => {
        const files = Array.from(event.target.files);
        setPhotos((prevPhotos) => [...prevPhotos, ...files]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResults([]);

        // Simulate an API call to check for diseases
        const newResults = await Promise.all(
            photos.map(async (photo) => {
                const response = await mockApiCheck(photo);
                return response;
            })
        );

        setResults(newResults);
        setLoading(false);
    };

    const mockApiCheck = async (photo) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`نتيجة للصورة ${photo.name}: لا توجد أمراض مكتشفة.`);
            }, 1000);
        });
    };

    return (
        <div className="app-container-bg">
            <div className="background-image2">
                <div className="overlay2">
                    <div className="about-content">
                        <Title title="مُكتشف أمراض أشجار النخيل" />
                        <Text text="قم بتحميل صور لأشجار النخيل الخاصة بك للتحقق من الأمراض." />
                    </div>
                </div>
            </div>

            <div className='app-container'>

            <div className="result-section">
                <Title title='النتائج' />
                    {loading && <p className="loading">جاري التحقق من الأمراض...</p>}

                    {results.length > 0 && (
                        <div className="results">
                            
                            <ul>
                                {results.map((result, index) => (
                                    <li key={index}>{result}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="upload-section">
                    <Title title="قم بارفاق الصور من هنا" />
                    <img src='/images/photo3.png' />
                    <form onSubmit={handleSubmit} className="upload-form">
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoChange}
                        />
                        <Button title="تحقق من الصور" type="submit" />
                    </form>

                    <div className="preview-section">
                        <Title title='الصور المرفقة' />
                        <div className="image-preview">
                            {photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(photo)}
                                    alt={`Uploaded ${index}`}
                                    className="preview-image"
                                />
                            ))}
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default Application;