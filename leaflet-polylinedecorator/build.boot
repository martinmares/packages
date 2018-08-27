(set-env!
 :resource-paths #{"resources"}
 :dependencies '[[cljsjs/boot-cljsjs "0.10.0" :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "1.6.0")
(def +version+ (str +lib-version+ "-0"))

(task-options!
 pom {:project     'cljsjs/leaflet-polylinedecorator
      :version     +version+
      :description "A plug-in for the JS map library Leaflet, allowing to define patterns (like dashes, arrows, icons, etc.) on Polylines."
      :url         "https://libraries.io/bower/leaflet-polylinedecorator/v0.7.3"
      :scm         {:url "https://github.com/bbecquet/Leaflet.PolylineDecorator"}
      :license     {"MIT License" "https://opensource.org/licenses/MIT"}})

(deftask package []
  (comp
   (download :url (str "https://github.com/bbecquet/Leaflet.PolylineDecorator/archive/v" +lib-version+ ".zip")
             :unzip true)
   (sift :move {#"^Leaflet.PolylineDecorator-[^/]*/dist/leaflet.polylineDecorator.js" "cljsjs/leaflet-polylinedecorator/development/leaflet-polylinedecorator.inc.js"})
   (sift :include #{#"^cljsjs" #"^deps.cljs"})
   (deps-cljs :name "cljsjs.leaflet-polylinedecorator")
   (pom)
   (jar)))
