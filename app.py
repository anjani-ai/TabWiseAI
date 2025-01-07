@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json
    body_type = data.get("body_type")
    preferences = data.get("preferences", {})
    
    # Filter clothing based on body type and preferences
    recommendations = [
        item for item in clothing_data
        if body_type in item["suitable_for"] and
           all(preferences.get(k, item[k]) == item[k] for k in preferences)
    ]
    
    return jsonify({"recommendations": recommendations})
