# Monarch Butterfly Migrations

## Topic 
**Utilizing tagging data to map the activity of monarch butterflies through their migration and then analyzing the trends in the tagging and collection process.**

The Monarch Watch organization distributes more than a quarter of a million unique tags each year to volunteers in North America (East of the Rocky Mountains).  Volunteers place the tags on butterflies during the summer months in an effort to track their migration. Throughout their fall migration volunteers also submit butterfly sighting reports. These reports include the unique tag number associated with the butterfly, the date and location of the sightings, as well as any relevant notes the volunteer wishes to add. The sighting reports help us understand migration routes, timing and pacing, mortality, and changes in geographic distribution. At the end of the migration to Mexico, volunteers collect tags off of butterflies so we know where each one ended up, as well as to create a clean dataset for the upcoming tagging year. While the data for their migration south is considered complete, a separate sightings report is created to track their trip back north. This sightings report doesn't include any unique tag information, but does still show us how the butterfly population as a whole completes the last portion of the migration process. 

## Data Sources
https://monarchwatch.org/tagging/index.html 

https://journeynorth.org/sightings/ 

## Hypothesis
Based on historical monarch butterfly data, the amount of butterflies in a given location during a specific month can be predicted.

## Approach for Analysis

Collecting and cleaning the data from CSVs, merging the datasets, then using pandas to fine tune our data. The data would then be processed with a regression model in Python to identify correlation between population counts and time of year. Then, extracting the processed data as a JSON, we can then load the data into JS Leaflet which will aid in a visual for our results. Lastly, we will use ML to project our future predictions. Our idea is to have a website to interact with our findings.


![monarchs](https://user-images.githubusercontent.com/90050622/153723671-f168629a-0aeb-4a95-a125-49a4b56076de.jpg)

# <br>
**How we got here:<br>**
<p align="center">
Our idea had a similar path much like our topic. We started at one stage, it change shape and idendity and became soemthing a lot more wonderful than anyone of us would have expected
</p> 

**_Christian_**<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; As a group we were trying to decide how to what data we were trying to find. We had discussed what our occupations are and if there was a way to incorporate that into our project. As we we are all in very different occupations at this time, it was difficult to find something decisive. I had some experience with Monarch Butterflies in my past and I had found data from journeynorth.com to which kick-started our project. I was able to locate a simple data-set to which our project quickly evolved into its next state. We had found our data and we were on a roll.<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I started a simple jupiter notebook to test the data. Sue was quickly able to take it and run with it to create geo json files. During that time I had taken some of our work we had done on a prior module using Leaflet to create the base of our project. Before we got too far, we had decided to begin thinking of what our tasks should be. Ultimately, my role would be front end. We had used Java Script for the base language that we would be working in. In order to create maps that would identify our data, it was my job to take a new plug-in and apply it to our current code. Unfortunataly this proved to be very difficult for me as JS is not my biggest strength. I ultimately found a way to do what we set out to do through Jupyter Notebook, however we were not able to solve the mystery of connecting Jupyter Notebook to JS.<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; After a a bit of trial and error, Josh was abel to leverage his experience, he was able to breake it till he made it. I then decided to work more on our presentation that would help get our website up and running. We turned our GitHub repository to be in the hands of Megan as I would be out of town for the presentations.
