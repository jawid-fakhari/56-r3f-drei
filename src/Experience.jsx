import { Float, Html, OrbitControls, PivotControls, Text, TransformControls } from "@react-three/drei"
import { useRef } from "react"
import { DoubleSide } from "three"

export default function Experience() {
    const cubeRef = useRef()
    const sphereRef = useRef()

    return <>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        {/* Pivot control  */}
        <PivotControls
            anchor={[0, 0, 0]} //anchor lo mette al centro
            depthTest={false} //depthTest visibile anche all'interno del oggetto
            lineWidth={4} //lareghezza delle linee del pivot
            // axisColors={['purpule', 'black', 'white']}
            scale={100} // senza fixed scale normale, con fixed scale in base ai pixel
            fixed={true} // il pivot rimane sempre uguale 
        >
            <mesh ref={sphereRef} position-x={- 2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />

                {/* all'interno di questo tag aggiungiamo il testo */}
                {/* Html puo essere aggiunto a tutto cio che inherita Object3D */}
                <Html
                    position={[1, 1, 0]}
                    wrapperClass="label" //class per utilizzare in css
                    center //centra il testo sul suo punto di posizione
                    distanceFactor={8} //in base alla zoom cambia la grandezza
                    occlude={[sphereRef, cubeRef]} //nasconde dietro gli oggeti indicati
                >
                    It's a sphere
                </Html>
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

        {/*Float, TEXT helper */}
        <Float
            speed={5}
            floatIntensity={2}
        >
            <Text
                font="./bangers-v20-latin-regular.woff"
                color="salmon"
                position={[0, 2, 0]}
                maxWidth={2} //larghezza del textarea
                textAlign="center"
                fontSize={0.5}
            >
                This is Text Helper
                {/* possiamo aggiungere anche materiali al testo */}
                <meshNormalMaterial side={DoubleSide} />
            </Text>
        </Float>

    </>
}