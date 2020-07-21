data={
    "crops": {
        "Rice": {
            "min_temp": 15,
            "max_temp": 27,
            "min_rain": 900,
            "max_rain": 2500,
            "soil": [
                "clay"
            ]
        },
        "Wheat": {
            "min_temp": 12,
            "max_temp": 25,
            "min_rain": 450,
            "max_rain": 650,
            "soil": [
                "loam",
                "clay",
                "sandy",
                "black"
            ]
        },
        "Maize": {
            "min_temp": 15,
            "max_temp": 27,
            "min_rain": 500,
            "max_rain": 800,
            "soil": [
                "clay",
                "sandy"
            ]
        },
        "Bajra": {
            "min_temp": 25,
            "max_temp": 35,
            "min_rain": 400,
            "max_rain": 600,
            "soil": [
                "sandy",
                "loam",
                "red"
            ]
        },
        "Sugarcane": {
            "min_temp": 20,
            "max_temp": 35,
            "min_rain": 850,
            "max_rain": 1650,
            "soil": [
                "alluvium",
                "black",
                "red",
                "brown regur"
            ]
        },
        "Cotton": {
            "min_temp": 18,
            "max_temp": 27,
            "min_rain": 600,
            "max_rain": 1100,
            "soil": [
                "loam",
                "black",
                "red"
            ]
        },
        "Tea": {
            "min_temp": 15,
            "max_temp": 35,
            "min_rain": 1000,
            "max_rain": 2500,
            "soil": [
                "light loamy"
            ]
        },
        "Coffee": {
            "min_temp": 15,
            "max_temp": 28,
            "min_rain": 1250,
            "max_rain": 2250,
            "soil": [
                "alluvium"
            ]
        },
        "Cocoa": {
            "min_temp": 18,
            "max_temp": 35,
            "min_rain": 1000,
            "max_rain": 2500,
            "soil": [
                "alluvium"
            ]
        },
        "Jute": {
            "min_temp": 25,
            "max_temp": 35,
            "min_rain": 1500,
            "max_rain": 2500,
            "soil": [
                "alluvium",
                "loam"
            ]
        },
        "Clove": {
            "min_temp": 25,
            "max_temp": 35,
            "min_rain": 900,
            "max_rain": 2500,
            "soil": [
                "red alluvial"
            ]
        },
        "Black_Pepper": {
            "min_temp": 15,
            "max_temp": 40,
            "min_rain": 900,
            "max_rain": 2500,
            "soil": [
                "sandy loam",
                "red loam"
            ]
        },
        "Cardamom": {
            "min_temp": 10,
            "max_temp": 35,
            "min_rain": 1500,
            "max_rain": 4000,
            "soil": [
                "lateritic"
            ]
        },
        "Turmeric": {
            "min_temp": 20,
            "max_temp": 30,
            "min_rain": 1500,
            "max_rain": 2500,
            "soil": [
                "red loamy",
                "clayey loam"
            ]
        },
        "Groundnut": {
            "min_temp": 20,
            "max_temp": 30,
            "min_rain": 500,
            "max_rain": 7500,
            "soil": [
                "red",
                "black"
            ]
        },
        "Rabi": {
            "min_temp": 15,
            "max_temp": 25,
            "min_rain": 900,
            "max_rain": 2500,
            "soil": [
                "loam",
                "clay"
            ]
        },
        "Kharif": {
            "min_temp": 20,
            "max_temp": 27,
            "min_rain": 250,
            "max_rain": 600,
            "soil": [
                "sandy",
                "loam"
            ]
        }
    },
    "soil": [
        "alluvium",
        "black",
        "brown regur",
        "clay",
        "lateritic",
        "loam",
        "red",
        "sandy",
        "sandy loam",
        "red loam",
        "red alluvial",
        "clayey loam",
        "light loamy"
    ]
}


def get_crops():
    c=data['crops'].keys()
    crops=[]
    for i in c:
        crops.append(i)
    return crops

def get_mintemp(crop):
    c=data['crops'][crop]['min_temp']
    return c

def get_maxtemp(crop):
    c=data['crops'][crop]['max_temp']
    return c

def get_maxrainfall(crop):
    c=data['crops'][crop]['max_rain']
    return c

def get_minrainfall(crop):
    c=data['crops'][crop]['min_rain']
    return c

def get_details(crop):
    max_temp=data['crops'][crop]['max_temp']
    min_temp=data['crops'][crop]['min_temp']
    max_rain=data['crops'][crop]['max_rain']
    min_rain=data['crops'][crop]['min_rain']
    return max_temp,min_temp,max_rain,min_rain
