import React from 'react';
import { Download, FileText } from 'lucide-react';

const DownloadComp = ({
  title,
  description,
  brochurePdfUrl,
  fileName,
  whatsInside,
  moreInfoTitle,
  moreInfoDesc,
  moreInfoButtonText,
  moreInfoButtonLink
}) => {
  // Handle PDF Download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochurePdfUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black">

      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-400 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-lg text-white/90 max-w-3xl mx-auto">{description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="bg-teal-950/50 p-6 border-b border-emerald-500/20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                  <p className="text-emerald-200/75 font-sans">Interactive PDF Viewer</p>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-emerald-400 to-teal-600 hover:from-emerald-500 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-400/50"
              >
                <Download size={20} />
                Download PDF
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="p-6">
            <div className="bg-teal-950/50 rounded-xl p-4 border border-emerald-500/20">
              <iframe
                src={brochurePdfUrl}
                className="w-full h-96 lg:h-[600px] rounded-lg"
                title={title}
                style={{ border: 'none' }}
              />
            </div>

            {/* Additional Info */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">What's Inside</h3>
                <ul className="space-y-2 text-emerald-200/75 font-sans">
                  {whatsInside.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">{moreInfoTitle}</h3>
                <p className="text-emerald-200/75 mb-4 font-sans text-justify">{moreInfoDesc}</p>
                <a href={moreInfoButtonLink}>
                  <button className="bg-teal-950/50 text-emerald-400 border-2 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                    {moreInfoButtonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DownloadComp;