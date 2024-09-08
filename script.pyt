import pandas as pd
import os
import json
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep
import selenium
import requests
# import os

# Load the Excel file
excel_file = 'D:/toktik/Toktik_metadatanew.xlsx'
xls = pd.ExcelFile(excel_file)


# for sheet_name in xls.sheet_names:
sheet_name = "Sheet1"
df = xls.parse(sheet_name)


# Iterate through rows of the DataFrame
for index, row in df.iterrows():
    if index < 0:
        continue;
    tiktok_videoLink = row['Links']
    title = str(row['Unique ID'])
    video_url = downloadingVideoLink(tiktok_videoLink)
    folder_name = row['User Name']

    if video_url == None:
        with open('MissingVideosData.txt', 'a') as file:
            # Append a new line to the file
            file.write(title+" "+tiktok_videoLink+" "+folder_name+"\n")

        continue

    folder_path = "D:/toktik/Toktik_video/"+folder_name
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    save_path = os.path.join(folder_path, title+".mp4")
    download_tiktok_video(video_url, save_path)