// Dashboard Data
const dashboardData = {
    "temporal": {
        "annual_data": [
            {"year": 2020, "hotspots": 33461},
            {"year": 2021, "hotspots": 25789},
            {"year": 2022, "hotspots": 18234},
            {"year": 2023, "hotspots": 15757},
            {"year": 2024, "hotspots": 10234},
            {"year": 2025, "hotspots": 10000}
        ],
        "monthly_data": [
            {"month": "Jan", "percentage": 18.5},
            {"month": "Feb", "percentage": 24.8},
            {"month": "Mar", "percentage": 31.2},
            {"month": "Apr", "percentage": 13.2},
            {"month": "May", "percentage": 3.8},
            {"month": "Jun", "percentage": 1.2},
            {"month": "Jul", "percentage": 0.8},
            {"month": "Aug", "percentage": 0.9},
            {"month": "Sep", "percentage": 1.1},
            {"month": "Oct", "percentage": 1.5},
            {"month": "Nov", "percentage": 1.8},
            {"month": "Dec", "percentage": 1.2}
        ],
        "quarterly_data": [
            {"quarter": "Q1", "percentage": 74.5},
            {"quarter": "Q2", "percentage": 18.2},
            {"quarter": "Q3", "percentage": 2.8},
            {"quarter": "Q4", "percentage": 4.5}
        ],
        "daily_pattern": [
            {"time": "00-04", "percentage": 8.2},
            {"time": "04-08", "percentage": 12.5},
            {"time": "08-12", "percentage": 22.3},
            {"time": "12-16", "percentage": 38.7},
            {"time": "16-20", "percentage": 14.8},
            {"time": "20-24", "percentage": 3.5}
        ]
    },
    "spatial": {
        "provinces": [
            {"name": "Mae Hong Son", "hotspots": 12500},
            {"name": "Chiang Mai", "hotspots": 11200},
            {"name": "Tak", "hotspots": 9800},
            {"name": "Lampang", "hotspots": 7000},
            {"name": "Nan", "hotspots": 5000}
        ],
        "lisa_clusters": {
            "high_high": 143,
            "low_low": 404,
            "high_low": 89,
            "low_high": 318
        }
    },
    "machine_learning": {
        "classification": {
            "accuracy": 88.9,
            "precision": 90.0,
            "recall": 88.9
        },
        "feature_importance": [
            {"feature": "Lag 1 Month", "importance": 45},
            {"feature": "Lag 2 Months", "importance": 28},
            {"feature": "Lag 3 Months", "importance": 15},
            {"feature": "Month of Year", "importance": 12}
        ]
    },
    "key_findings": [
        "87.7% of fires occur during January-April dry season",
        "March accounts for 31.2% of annual fire activity",
        "Northern Thailand experiences 40.1% of all fire hotspots",
        "143 High-High cluster cells identified for priority intervention",
        "Machine learning models achieve 88.9% prediction accuracy",
        "Strong spatial clustering detected (NNI=0.4233)",
        "Positive spatial autocorrelation confirmed (Moran's I=0.5686)",
        "3.6-fold interannual variation in fire occurrence"
    ],
    "recommendations": [
        "Pre-position resources in 143 High-High cluster cells",
        "Implement early warning systems with 1-3 month lead time",
        "Focus interventions on January-April peak season",
        "Target northern provinces for fire prevention programs",
        "Deploy predictive models for operational forecasting"
    ]
};

// Chart.js Configuration
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#4B5563';

// Annual Chart
const annualCtx = document.getElementById('annualChart');
new Chart(annualCtx, {
    type: 'bar',
    data: {
        labels: dashboardData.temporal.annual_data.map(d => d.year),
        datasets: [{
            label: 'Fire Hotspots',
            data: dashboardData.temporal.annual_data.map(d => d.hotspots),
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.y.toLocaleString() + ' hotspots';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString();
                    }
                }
            }
        }
    }
});

// Monthly Chart
const monthlyCtx = document.getElementById('monthlyChart');
new Chart(monthlyCtx, {
    type: 'line',
    data: {
        labels: dashboardData.temporal.monthly_data.map(d => d.month),
        datasets: [{
            label: 'Percentage of Annual Fires',
            data: dashboardData.temporal.monthly_data.map(d => d.percentage),
            backgroundColor: 'rgba(249, 115, 22, 0.2)',
            borderColor: 'rgba(249, 115, 22, 1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: 'rgba(249, 115, 22, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.y + '% of annual fires';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

// Quarterly Chart
const quarterlyCtx = document.getElementById('quarterlyChart');
new Chart(quarterlyCtx, {
    type: 'doughnut',
    data: {
        labels: dashboardData.temporal.quarterly_data.map(d => d.quarter),
        datasets: [{
            data: dashboardData.temporal.quarterly_data.map(d => d.percentage),
            backgroundColor: [
                'rgba(239, 68, 68, 0.8)',
                'rgba(249, 115, 22, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(59, 130, 246, 0.8)'
            ],
            borderColor: '#ffffff',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        }
    }
});

// Daily Pattern Chart
const dailyCtx = document.getElementById('dailyChart');
new Chart(dailyCtx, {
    type: 'bar',
    data: {
        labels: dashboardData.temporal.daily_pattern.map(d => d.time),
        datasets: [{
            label: 'Detection Frequency',
            data: dashboardData.temporal.daily_pattern.map(d => d.percentage),
            backgroundColor: 'rgba(168, 85, 247, 0.7)',
            borderColor: 'rgba(168, 85, 247, 1)',
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.y + '% of daily detections';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

// LISA Clusters Chart
const lisaCtx = document.getElementById('lisaChart');
new Chart(lisaCtx, {
    type: 'pie',
    data: {
        labels: ['High-High (143)', 'Low-Low (404)', 'High-Low (89)', 'Low-High (318)'],
        datasets: [{
            data: [
                dashboardData.spatial.lisa_clusters.high_high,
                dashboardData.spatial.lisa_clusters.low_low,
                dashboardData.spatial.lisa_clusters.high_low,
                dashboardData.spatial.lisa_clusters.low_high
            ],
            backgroundColor: [
                'rgba(239, 68, 68, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(249, 115, 22, 0.8)',
                'rgba(234, 179, 8, 0.8)'
            ],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 10
                    }
                }
            }
        }
    }
});

// Provinces Chart
const provincesCtx = document.getElementById('provincesChart');
new Chart(provincesCtx, {
    type: 'bar',
    data: {
        labels: dashboardData.spatial.provinces.map(d => d.name),
        datasets: [{
            label: 'Fire Hotspots',
            data: dashboardData.spatial.provinces.map(d => d.hotspots),
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.x.toLocaleString() + ' hotspots';
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString();
                    }
                }
            }
        }
    }
});

// ML Classification Chart
const mlClassCtx = document.getElementById('mlClassificationChart');
new Chart(mlClassCtx, {
    type: 'radar',
    data: {
        labels: ['Accuracy', 'Precision', 'Recall'],
        datasets: [{
            label: 'Performance (%)',
            data: [
                dashboardData.machine_learning.classification.accuracy,
                dashboardData.machine_learning.classification.precision,
                dashboardData.machine_learning.classification.recall
            ],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(59, 130, 246, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
            pointRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20,
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Feature Importance Chart
const featureCtx = document.getElementById('featureImportanceChart');
new Chart(featureCtx, {
    type: 'bar',
    data: {
        labels: dashboardData.machine_learning.feature_importance.map(d => d.feature),
        datasets: [{
            label: 'Importance (%)',
            data: dashboardData.machine_learning.feature_importance.map(d => d.importance),
            backgroundColor: [
                'rgba(139, 92, 246, 0.8)',
                'rgba(168, 85, 247, 0.8)',
                'rgba(192, 132, 252, 0.8)',
                'rgba(216, 180, 254, 0.8)'
            ],
            borderColor: 'rgba(139, 92, 246, 1)',
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return 'Importance: ' + context.parsed.x + '%';
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 50,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

// Initialize Map
const map = L.map('map').setView([15.87, 100.99], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// Add fire hotspot markers for major provinces
const hotspotLocations = [
    {name: "Mae Hong Son", lat: 19.3, lng: 98.0, hotspots: 12500},
    {name: "Chiang Mai", lat: 18.8, lng: 98.9, hotspots: 11200},
    {name: "Tak", lat: 16.9, lng: 99.1, hotspots: 9800},
    {name: "Lampang", lat: 18.3, lng: 99.5, hotspots: 7000},
    {name: "Nan", lat: 18.8, lng: 100.8, hotspots: 5000},
    {name: "Phrae", lat: 18.1, lng: 100.1, hotspots: 4500},
    {name: "Chiang Rai", lat: 19.9, lng: 99.8, hotspots: 6200},
    {name: "Uttaradit", lat: 17.6, lng: 100.1, hotspots: 3800},
    {name: "Sukhothai", lat: 17.0, lng: 99.8, hotspots: 3200},
    {name: "Phitsanulok", lat: 16.8, lng: 100.3, hotspots: 2900}
];

hotspotLocations.forEach(location => {
    const radius = Math.sqrt(location.hotspots) * 0.5;
    const circle = L.circle([location.lat, location.lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: radius * 1000
    }).addTo(map);
    
    circle.bindPopup(`<b>${location.name}</b><br>${location.hotspots.toLocaleString()} fire hotspots`);
});

// Add legend
const legend = L.control({position: 'bottomright'});
legend.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info legend');
    div.style.background = 'white';
    div.style.padding = '10px';
    div.style.borderRadius = '8px';
    div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    div.innerHTML = '<h4 style="margin:0 0 5px 0;font-weight:bold;">Fire Intensity</h4>' +
                    '<i style="background:rgba(255,0,51,0.3);width:18px;height:18px;display:inline-block;margin-right:5px;border-radius:50%;"></i> Low<br>' +
                    '<i style="background:rgba(255,0,51,0.5);width:18px;height:18px;display:inline-block;margin-right:5px;border-radius:50%;"></i> Medium<br>' +
                    '<i style="background:rgba(255,0,51,0.7);width:18px;height:18px;display:inline-block;margin-right:5px;border-radius:50%;"></i> High';
    return div;
};
legend.addTo(map);

// Populate Key Findings
const findingsList = document.getElementById('keyFindings');
dashboardData.key_findings.forEach(finding => {
    const li = document.createElement('li');
    li.className = 'flex items-start';
    li.innerHTML = `
        <span class="text-green-500 mr-2 mt-1">✓</span>
        <span class="text-gray-700">${finding}</span>
    `;
    findingsList.appendChild(li);
});

// Populate Recommendations
const recommendationsList = document.getElementById('recommendations');
dashboardData.recommendations.forEach(recommendation => {
    const li = document.createElement('li');
    li.className = 'flex items-start';
    li.innerHTML = `
        <span class="text-blue-500 mr-2 mt-1">→</span>
        <span class="text-gray-700">${recommendation}</span>
    `;
    recommendationsList.appendChild(li);
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log('Dashboard loaded successfully!');
