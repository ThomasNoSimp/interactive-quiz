import React from 'react';
import '../styles/Pages/Download.css';

export const DownloadPage = () => {
    return (
        <div className="container">
            <a href="server/android/app.apk" download className="downloadButton">
                Download for Android
            </a>
            <p><b>Note: Android app coming soon! Stay tuned!</b></p>
        </div>
    );
}
