import detect
import sys


def main():
    #Source directory
    col_dir = './DetectFiles'
    #For Detection  '../MLBackend/runs/{}/weights/best.pt'.format(sys.argv[1]
    
    # model1=detect.run(weights='runs/train/yolov5s_results/weights/best.pt',source=col_dir,conf_thres=0.2,iou_thres=0.25,project="Scratch/",name="exp")    
    model1 = detect.run(weights='runs/train/yolov5s_results/weights/best.pt',
                        source="rtsp://192.168.0.106:8080/h264_ulaw.sdp", conf_thres=0.25, iou_thres=0.25, project="Scratch/", name="exp")
    




if __name__ == "__main__":
   
    main()
        

# py -list
# py -3.9 -m pip install -r .\requirements.txt