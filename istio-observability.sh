
kubectl -n istio-system port-forward $(kubectl -n istio-system get pods -lapp=kiali -o=jsonpath="{.items[0].metadata.name}") 20001 &
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=zipkin -o jsonpath='{.items[0].metadata.name}') 9411 &
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}') 3000 &

chromium-browser http://localhost:20001/kiali/ &
chromium-browser http://localhost:3000 &
chromium-browser http://localhost:9411/zipkin/ &
