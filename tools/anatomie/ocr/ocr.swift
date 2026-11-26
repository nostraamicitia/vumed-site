import Vision
import AppKit
let path = CommandLine.arguments[1]
let img = NSImage(contentsOfFile: path)!
var rect = CGRect(origin: .zero, size: img.size)
let cg = img.cgImage(forProposedRect: &rect, context: nil, hints: nil)!
let W = CGFloat(cg.width), H = CGFloat(cg.height)
let req = VNRecognizeTextRequest { r, _ in
  for o in (r.results as? [VNRecognizedTextObservation]) ?? [] {
    let b = o.boundingBox
    let t = o.topCandidates(1).first?.string ?? ""
    print(String(format: "%d\t%d\t%d\t%d\t%@", Int(b.minX*W), Int((1-b.maxY)*H), Int(b.maxX*W), Int((1-b.minY)*H), t))
  }
}
req.recognitionLevel = .accurate
try! VNImageRequestHandler(cgImage: cg).perform([req])
