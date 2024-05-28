document.getElementById("analysis-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    
    // Lấy giá trị URL từ input
    var urlInput = document.getElementById("url-input").value;
    
    // Gửi URL đến backend để phân tích
    analyzeUrl(urlInput);
});

function analyzeUrl(url) {
    // Hàm mẫu để trình diễn
    // Bạn có thể triển khai yêu cầu AJAX thực tế đến backend ở đây
    console.log("Phân tích URL:", url);
    // Phản hồi mẫu
    var analysisResult = "URL " + url + " đã được phân tích.";
    displayAnalysisResult(analysisResult);
}

function displayAnalysisResult(result) {
    // Hiển thị kết quả phân tích trong phần kết quả
    var resultDiv = document.getElementById("analysis-results");
    resultDiv.innerHTML = "<p>" + result + "</p>";
}