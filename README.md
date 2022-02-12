# Monarch Butterfly Migrations

## Topic 
**Utilizing tagging data to map the activity of monarch butterflies through their migration and then analyzing the trends in the tagging and collection process.**

The Monarch Watch organization distributes more than a quarter of a million unique tags each year to volunteers in North America (East of the Rocky Mountains).  Volunteers place the tags on butterflies during the summer months in an effort to track their migration. Throughout their fall migration volunteers also submit butterfly sighting reports. These reports include the unique tag number associated with the butterfly, the date and location of the sightings, as well as any relevant notes the volunteer wishes to add. The sighting reports help us understand migration routes, timing and pacing, mortality, and changes in geographic distribution. At the end of the migration to Mexico, volunteers collect tags off of butterflies so we know where each one ended up, as well as to create a clean dataset for the upcoming tagging year. While the data for their migration south is considered complete, a separate sightings report is created to track their trip back north. This sightings report doesn't include any unique tag information, but does still show us how the butterfly population as a whole completes the last portion of the migration process. 

## Data Sources
https://monarchwatch.org/tagging/index.html 

https://journeynorth.org/sightings/ 

## Hypothesis
Based on historical monarch butterfly data, the amount of butterflies in a given location during a specific month can be predicted based on historical data.

## Approach for Analysis

Collecting and cleaning the data from CSVs, merging the datasets, then using pandas to fine tune our data. The data would then be processed with a regression model in Python to identify correlation between population counts and time of year. Then, extracting the processed data as a JSON, we can then load the data into JS Leaflet which will aid in a visual for our results. Lastly, we will use ML to project our future predictions. Our idea is to have a website to interact with our findings.


![monarchs](https://user-images.githubusercontent.com/90050622/153723671-f168629a-0aeb-4a95-a125-49a4b56076de.jpg)
