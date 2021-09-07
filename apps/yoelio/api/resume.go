package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)
type File struct {
	Url string		`json:"url"`
}
type Fields struct {
	File File			`json:"file"`
}
type Data struct {
	Fields Fields	`json:"fields"`
}

func Resume(w http.ResponseWriter, r *http.Request) {
	accessToken := os.Getenv("CONTENTFUL_ACCESS_TOKEN")
	spaceId := os.Getenv("CONTENTFUL_SPACE_ID")
	resp, err := http.Get(fmt.Sprintf("https://cdn.contentful.com/spaces/%s/environments/master/assets/2yqI31pDmRtrrGEKI7RHnZ?access_token=%s", spaceId, accessToken))
	if err != nil {
		log.Fatal(err)
	}

	body, err := io.ReadAll(resp.Body)
	resp.Body.Close()
	if resp.StatusCode > 299 {
		log.Fatalf("Response failed with status code: %d and\nbody: %s\n", resp.StatusCode, body)
	}
	if err != nil {
		log.Fatal(err)
	}

	var data Data
	err = json.Unmarshal(body, &data)
	if err != nil {
		log.Fatal(err)
	}

	http.Redirect(w, r, "https:" + data.Fields.File.Url, 301)
}