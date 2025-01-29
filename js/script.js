// Pricing configuration (update these when rates change)
const DEEPSEEK_RATES = {
    proInput: 0.002,
    proOutput: 0.004,
    lite: 0.001,
    embeddings: 0.0001
};

// Calculate costs in real-time
function calculateCosts() {
    // Get input values
    const proInput = parseInt($('#pro-input').val()) || 0;
    const proOutput = parseInt($('#pro-output').val()) || 0;
    const lite = parseInt($('#lite').val()) || 0;
    const embeddings = parseInt($('#embeddings').val()) || 0;

    // Calculate individual costs
    const costs = {
        proInput: (proInput / 1000) * DEEPSEEK_RATES.proInput,
        proOutput: (proOutput / 1000) * DEEPSEEK_RATES.proOutput,
        lite: (lite / 1000) * DEEPSEEK_RATES.lite,
        embeddings: (embeddings / 1000) * DEEPSEEK_RATES.embeddings
    };

    // Calculate total cost
    const total = Object.values(costs).reduce((acc, curr) => acc + curr, 0);

    // Update display
    $('#total').text(`$${total.toFixed(4)}`);
    $('#pro-input-cost').text(`Pro Input: $${costs.proInput.toFixed(4)}`);
    $('#pro-output-cost').text(`Pro Output: $${costs.proOutput.toFixed(4)}`);
    $('#lite-cost').text(`Lite: $${costs.lite.toFixed(4)}`);
    $('#embeddings-cost').text(`Embeddings: $${costs.embeddings.toFixed(4)}`);
}

// Initialize calculator
$(document).ready(function() {
    // Attach event listeners
    $('#pro-input, #pro-output, #lite, #embeddings').on('input', calculateCosts);
    
    // Initial calculation
    calculateCosts();
});
