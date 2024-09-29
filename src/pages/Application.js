import '../styles/Application.css';
import Title from '../components/Title'; 
import Text from '../components/Text';

import ImageUpload from '../components/UploadPhotos';

const Application = () => {
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

            <ImageUpload />

           
        </div>
    );
};

export default Application;