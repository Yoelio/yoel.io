package handler

import (
	"net/http"
)

func Resume(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "https://google.com", 301)
}