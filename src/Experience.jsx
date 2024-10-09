import { OrbitControls, PivotControls, TransformControls } from "@react-three/drei"
import { useRef } from "react"


export default function Experience() {
    const cubeRef = useRef()
    const sphereGeometry = useRef()
    return <>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        {/* Pivot control  */}
        <PivotControls
            anchor={[0, 0, 0]} //anchor lo mette al centro
            depthTest={false} //depthTest visibile anche all'interno del oggetto
            lineWidth={4} //lareghezza delle linee del pivot
            axisColors={['purpule', 'black', 'white']}
            scale={100} // senza fixed scale normale, con fixed scale in base ai pixel
            fixed={true} // il pivot rimane sempre uguale 
        >
            <mesh ref={sphereGeometry} position-x={- 2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </PivotControls>

        {/* aggiungiamo gizmo axes con TransformControls che by default è al centro scena quindi non al centro del oggetto(2 soluzioni: spostare position nel transformcontrols tag come parent. Oppure usare useRef, e passare come object al tranformControls), poi quando cerchiamo di muovere un asse si muove tutto. le soluzioni sono(soluzione: aggiungere makeDefault al orbitControl) */}
        <mesh ref={cubeRef} position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        {/* si puo aggiungere mode= "scale" /"rotaion" */}
        <TransformControls object={cubeRef} mode="translate" />

        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}