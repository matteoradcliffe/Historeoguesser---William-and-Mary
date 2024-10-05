function showInfo(building) {
    let buildingInfo = '';

    switch (building) {
        case 'Library':
            buildingInfo = 'The Library houses over 100,000 books and has study areas on every floor.';
            break;
        case 'Science Building':
            buildingInfo = 'The Science Building includes laboratories and lecture halls for biology, chemistry, and physics courses.';
            break;
        case 'Student Center':
            buildingInfo = 'The Student Center has a dining hall, lounge areas, and facilities for student activities.';
            break;
        default:
            buildingInfo = 'Information not available.';
    }

    document.getElementById('buildingInfo').innerText = buildingInfo;
    document.getElementById('infoBox').style.display = 'block';
}

function closeInfo() {
    document.getElementById('infoBox').style.display = 'none';
}